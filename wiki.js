document.write(`<link rel=stylesheet href=wiki.css>`)
document.write(`<script src=index.gen.json.js></script>`)

document.title = location.pathname.replace(/.*\/([a-zA-Z]*).*/, "$1")

var sourceFile = "DaiCreditSystem920.sol"
var code

document.addEventListener("DOMContentLoaded", () => {
  code = index[sourceFile]
  document.body.innerHTML = [
    `<h1>${document.title}</h1>`,
    wikify(document.body.innerHTML),
    "\n",
    wikify(getSnippets(document.title).map(x => [
      `<h2><span>${x.file}</span>Line ${x.lineNumber}</h2>`,
      `<pre>${highlight(x.code)}</pre>`,
    ].join("")).join("\n")),
  ].join("\n")
})

var highlight = code => code
.replace(/((?:function|modifier)\s+)(\w+)/g, "$1<u>$2</u>")
.replace(/\bLog\w+/g, "<i>$&</i>")
.replace(new RegExp(`\\b(${`
  contract function internal int uint var years days modifier struct assert
  public event indexed if else return bytes32 address enum storage mapping
`.trim().split(/\s+/).join("|")})\\b`, "g"), "<b>$&</b>")

var wikify = html => html
.replace(/(^\n+)|(\n+$)/g, "")
.replace(/([A-Z]?[a-z]+)([A-Z][a-z]+)+/g, getLink)
.replace(/0x[0-9a-f]{40}/g, getAddressLink)
.replace(/(Example \d+|Background|Scenario):(?: (.*))?/g, "<b>$1:</b> <u>$2</u>")

var getAddressLink = address =>
`<a href=https://etherscan.io/address/${address}>${address}</a>`

var getLink = name => {
  var filename = name.replace(/^[a-z]/, x => x.toUpperCase())
  var singular = filename.replace(/s$/, "")
  var extension = /\.html$/.test(location.href) ? ".html" : ""
  if (index.indexOf(`${filename}.html`) >= 0) {
    return `<a href=${filename}${extension}>${name}</a>`
  } else if (index.indexOf(`${singular}.html`) >= 0) {
    return `<a href=${singular}${extension}>${singular}</a>s`
  } else {
    return `<a href=${filename}${extension} class=broken>${name}</a>`
  }
}

var getSnippets = topic => []

// var getSnippets = topic => code ? Object.keys(index).filter(filename => {
//   return /\.sol$/.test(filename)
// }).reduce((result, filename) => {
//   index[filename].replace(new RegExp(
//     `^( *)/// Tags: .*${topic}.*\n((?:.|\n)*?^\\1\\}$)`, "gm"
//   ), (match, indent, fragment, offset) => {
//     var start = index[filename].indexOf(fragment)
//     var lineNumber = index[filename].substring(0, start).split("\n").length
//     var indent = fragment.match(/^ */)[0]
//     var code = fragment.replace(new RegExp(`^ {${indent.length}}`, "gm"), "")
//     result.push({ file: sourceFile, code, lineNumber })
//   })

//   // index[filename].replace(new RegExp(topic, "g"), (match, offset) => {
//   //   var lineNumber = index[filename].substring(0, offset).split("\n").length
//   //   var lines = index[filename].split("\n")
//   //   var line = lines[lineNumber]
//   //   var fragment, group = [line]
//   //   var level = line => line.replace(/\S.*/, "").length
//   //   var i

//   //   for (i = lineNumber - 1; i >= 0 && level(lines[i]) > 4; i--) {
//   //     group.unshift(lines[i])
//   //   }

//   //   for (; i >= 0 && lines[i] != ""; i--) {
//   //     group.unshift(lines[i])
//   //   }

//   //   for (i = lineNumber + 1; i < lines.length && level(lines[i]) > 4; i++) {
//   //     group.push(lines[i])
//   //   }

//   //   for (; i < lines.length && lines[i] != ""; i++) {
//   //     group.push(lines[i])
//   //   }

//   //   var fragment = group.join("\n")
//   //   var indent = fragment.match(/^ */)[0]
//   //   // var code = fragment.replace(new RegExp(`^ {${indent.length}}`, "gm"), "")
//   //   var code = fragment

//   //   result.push({ file: sourceFile, code, lineNumber })
//   // })

//   return result
// }, []) : []

function getAllLogs(address, fromBlock=1, result=[]) {
  return getLogs(address, fromBlock).then(logs => {
    if (logs.length < 1000) {
      return result.concat(logs)
    } else {
      var partialBlock = Number(logs[logs.length - 1].blockNumber)
      getLogs(address, fromBlock, partialBlock - 1, result).then(logs => {
        return getAllLogs(address, partialBlock, result.concat(logs))
      })
    }
  })
}

function getLogs(address, fromBlock=1, toBlock="latest") {
  return etherscan({
    module: "logs", action: "getLogs", address, fromBlock, toBlock,
  })
}

function etherscan(params) {
  return fetch(
    `https://api.etherscan.io/api?${toQueryString(params)}`
  ).then(response => {
    if (response.ok) {
      return response.json().then(json => {
        if (json.error) {
          return Promise.reject(new Error(JSON.stringify(json.error)))
        } else {
          return json.result
        }
      })
    } else {
      return Promise.reject(new Error(`HTTP ${response.statusCode}`))
    }
  })
}

function toQueryString(params) {
  return Object.keys(params).map(name => ([
    encodeURIComponent(name),
    encodeURIComponent(params[name]),
  ])).map(([name, value]) => `${name}=${value}`).join("&")
}
