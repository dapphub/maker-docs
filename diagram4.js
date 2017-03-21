document.write(`
  <div style="position: absolute;">
  <!--table style="float: left; margin-right: 3rem">
    <tbody class=words>
      <tr><td><td style="text-align: left"><b>Variables</b></th></tr>
      <tr><th>fix</th><td>Market price of dai</td></tr>
    </tbody>
  </table-->
  <table style="float: right; margin-top: 2rem; margin-right: -1rem">
    <tbody class=symbols>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          rankdir=LR;
          node [shape=plaintext width=0 height=0]
          <> -> < > [style=bold color=blue]
        }
      `)}</th><td>Gem transfer</td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          rankdir=LR;
          node [shape=plaintext width=0 height=0]
          <> -> < > [style=bold color=hotpink]
        }
      `)}</th><td>Dai transfer</td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          rankdir=LR;
          node [shape=plaintext width=0 height=0]
          <> -> < > [style=bold color=red]
        }
      `)}</th><td>Sin (debt) transfer</td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          rankdir=LR;
          node [shape=plaintext width=0 height=0]
          <> -> < > [style=bold color=teal]
        }
      `)}</th><td>MKR transfer</td></tr>
    </tbody>
  </table>
  </div>
`)

document.write(`<div style="float: left; margin-left: 2rem">${Viz(`
  digraph {
    node [fontname=monospace fontsize=12 shape=circle];
    edge [fontname=monospace fontsize=12];

    rankdir   = LR;
    labelloc  = t;
    labeljust = l;
    label     = <<b>Settlement</b>    >;
    fontname  = "sans-serif";
    fontsize  = 16;
    ratio     = 0.7;

    edge [len=1.5]

    <urn> [label=urn shape=invtrapezium]
    <vat> [shape=square style=bold]
    <vow> [shape=square style=bold height=1]

    subgraph cluster_flipflaps {
      style = invis;
      <flipper> [shape=square style=bold height=0.8]
      <flopper> [shape=square style=bold height=0.8]
      <flapper> [shape=square style=bold height=0.8]
    }

    subgraph cluster_dai {
      style = invis;
      <dai> [label=DAI shape=septagon height=0.7]
      <sin> [label=SIN shape=septagon height=0.7]
    }

    <mkr> [label=MKR shape=septagon height=0.7]

    <market2> [shape=tripleoctagon label=bog height=0.7]

    <dai> -> <jug> [style=bold color=hotpink label=mint]
    <sin> -> <jug> [style=bold color=red label=mint]

    {<vow>, <jug>} -> <dai> [style=bold color=hotpink label=burn]
    {<vow>, <jug>} -> <sin> [style=bold color=red label=burn]

    <mkr> -> <vow> [style=bold color=teal label=mint]
    <vow> -> <mkr> [style=bold color=teal label=burn]

    <vat> -> <jug> [style=bold color="hotpink:invis:red" label=mend]
    <jug> -> <vat> [style=bold color="hotpink:invis:red" label=lend]

    <urn> -> <vat> [style=bold color="blue:invis:red" label=bite]
    <vat> -> <vow> [style=bold color="blue:invis:red" label=grab]
    <vat> -> <vow> [style=bold color=hotpink label=loot]
    <vow> -> <vat> [style=bold color=blue label=plop]

    <vow> -> <flipper> [style=bold color=blue label=flip]
    <flipper> -> <vow> [style=bold color=hotpink]
    <flipper> -> <vow> [style=bold color=blue label=plop]
    <flipper> -> <market2> [style=bold color=blue]
    <market2> -> <flipper> [style=bold color=hotpink]

    <vow> -> <flopper> [style=bold color=red label=flop]
    <flopper> -> <vow> [style=bold color="hotpink:invis:red" label=tidy]
    <vow> -> <flopper> [style=bold color=teal label=bust]
    <flopper> -> <market2> [style=bold color=teal]
    <market2> -> <flopper> [style=bold color=hotpink]

    <vow> -> <flapper> [style=bold color=hotpink label=flap]
    <flapper> -> <vow> [style=bold color=teal label=boom]
    <flapper> -> <market2> [style=bold color=hotpink]
    <market2> -> <flapper> [style=bold color=teal]
  }
`, { engine: "dot" })}</div>`)

