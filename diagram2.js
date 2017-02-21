document.write(`<h1>MakerDAO v525</h1>`)
document.write("<br>")
document.write(`
  <div style="position: absolute; top: 20rem; left: 36rem">
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
          <> -> < > [style=bold color=red arrowtail=inv dir=both arrowhead=none]
        }
      `)}</th><td>Debt transfer</td></tr>
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

document.write(`<div style="float: left">${Viz(`
  digraph {
    node [fontname=monospace fontsize=12 shape=circle];
    edge [fontname=monospace fontsize=12];

    rankdir   = LR;
    labelloc  = t;
    labeljust = c;
    label     = <<b>All flows of value (expanded)</b>    >;
    fontname  = "sans-serif";
    fontsize  = 16;
    overlap = false;

    edge [len=1.5]

    <urn1> [label=urn shape=invtrapezium]
    <vow3> [label=vow shape=square style=bold]
    
    <market1> [shape=tripleoctagon label=bog height=0.7]
    
    <dai1> [label=DAI shape=septagon height=0.7]
    <mkr1> [label=MKR shape=septagon height=0.7]
    <urn2> [label=urn shape=invtrapezium]
    <vat3> [label=vat shape=square style=bold]
    <vat4> [label=vat shape=square style=bold]
    <vat5> [label=vat shape=square style=bold]
    <vow1> [label=vow shape=square style=bold]
    <vow2> [label=vow shape=square style=bold]
    <lad1> [label=lad]
    <lad2> [label=lad]

    <urn2> -> <vat3> [label=<bite> style=bold color=red arrowhead=inv]
    <vat3> -> <vow2> [label=<heal> style=bold color=red arrowhead=inv]
    <mkr1> -> <vow2> [label=<bust> style=bold color=teal]
    <vow1> -> <mkr1> [label=<boom> style=bold color=teal]

    <urn2> -> <vat4> [label=<poke> style=bold color=hotpink]

    <vat5> -> <vow1> [label=<loot> style=bold color=hotpink]

    <vow3> -> <urn1> [label=<plop> style=bold color=hotpink]
    <urn1> -> <vat4> [label=<plop> style=bold color=hotpink]

    <urn2> -> <vow3> [label=<grab> style=bold color=blue]
    <urn1> -> <lad2> [label=<poof> style=dashed color=blue]

    <dai1> -> <urn2> [label=mint style=bold color=hotpink]
    #<urn1> -> <dai2> [label=<burn> style=bold color=hotpink]
    <urn2> -> <dai1> [label=<burn> style=bold color=hotpink]

    <urn1> [style=dashed]

    <vow3> -> <urn1> [label=<plop> style=dashed color=blue arrowhead=open]
    <market1> -> <vow1> [style=bold color=teal]
    <vow1> -> <market1> [label=<flap> style=bold color=hotpink]

    <vow2> -> <market1> [style=bold color=teal]
    <market1> -> <vow2> [label=<flop> style=bold color=hotpink]

    <vow3> -> <market1> [style=bold color=blue]
    <market1> -> <vow3> [label=<flip        > style=bold color=hotpink]
    <market1> -> <vow3> [style=dashed color=blue]

    <lad1> -> <urn2> [label=<lock> style=bold color=blue]
    <lad1> -> <urn2> [label=<wipe> style=bold color=hotpink]
    <urn2> -> <lad1> [label=<draw> style=bold color=hotpink]
    <urn2> -> <lad1> [label=<free> style=bold color=blue]
  }
`, { engine: "neato" })}</div>`)

document.write(`<div style="float: left">${Viz(`
  digraph {
    node [fontname=monospace fontsize=12 shape=circle];
    edge [fontname=monospace fontsize=12];

    rankdir   = LR;
    labelloc  = t;
    labeljust = c;
    label     = <<b>Liquidation</b>    >;
    fontname  = "sans-serif";
    fontsize  = 16;
    overlap = false;

    <vow> [shape=square style=bold]    
    <dai> [label=DAI shape=septagon height=0.7]
    <mkr> [label=MKR shape=septagon height=0.7]
    <vat> [shape=square style=bold]

    <bog> [shape=tripleoctagon label=bog height=0.7]
    <bog> -> <vow> [style=bold color=hotpink]
    <bog> -> <vow> [style=dashed color=blue]
    <mkr> -> <vow> [style=bold color=teal]
    <vat> -> <dai> [style=bold color=hotpink]
    <vat> -> <lad> [style=dashed color=blue]
    <vat> -> <vow> [style=bold color=blue]
    <vat> -> <vow> [style=bold color=red arrowhead=inv]
    <vow> -> <bog> [style=bold color=blue]
    <vow> -> <bog> [style=bold color=teal]
    <vow> -> <vat> [style=bold color=hotpink]
    <vow> -> <vat> [style=dashed color=blue arrowhead=open]
  }
`, { engine: "neato" })}</div>`)

document.write(`<div style="float: left">${Viz(`
  digraph {
    node [fontname=monospace fontsize=12 shape=circle];
    edge [fontname=monospace fontsize=12];

    rankdir   = LR;
    labelloc  = t;
    labeljust = c;
    label     = <<b>Normal operation</b>    >;
    fontname  = "sans-serif";
    fontsize  = 16;
    overlap = false;

    <vow> [shape=square style=bold]    
    <dai> [label=DAI shape=septagon height=0.7]
    <mkr> [label=MKR shape=septagon height=0.7]
    <vat> [shape=square style=bold]

    <bog> [shape=tripleoctagon label=bog height=0.7]
    
    <bog> -> <vow> [style=bold color=teal]
    <dai> -> <vat> [style=bold color=hotpink]
    <lad> -> <vat> [style=bold color=blue]
    <lad> -> <vat> [style=bold color=hotpink]
    <vat> -> <dai> [style=bold color=hotpink]
    <vat> -> <lad> [style=bold color=blue]
    <vat> -> <lad> [style=bold color=hotpink]
    <vat> -> <vow> [style=bold color=hotpink]
    <vow> -> <bog> [style=bold color=hotpink]
    <vow> -> <mkr> [style=bold color=teal]
  }
`, { engine: "neato" })}</div>`)

document.write(`<div style="margin: 3rem; float: left">${Viz(`
  digraph {
    node [fontname=monospace fontsize=12 shape=circle];
    edge [fontname=monospace fontsize=12];

    rankdir   = LR;
    labelloc  = t;
    labeljust = l;
    label     = <<b>All flows of value</b>    >;
    fontname  = "sans-serif";
    fontsize  = 16;
    overlap = false;

    <vow> [shape=square style=bold]    
    <dai> [label=DAI shape=septagon height=0.7]
    <mkr> [label=MKR shape=septagon height=0.7]
    <vat> [shape=square style=bold]

    <bog> [shape=tripleoctagon label=bog height=0.7]

    <bog> -> <vow> [style=bold color=hotpink]
    <bog> -> <vow> [style=bold color=teal]
    <bog> -> <vow> [style=dashed color=blue]
    <dai> -> <vat> [style=bold color=hotpink]
    <lad> -> <vat> [style=bold color=blue]
    <lad> -> <vat> [style=bold color=hotpink]
    <mkr> -> <vow> [style=bold color=teal]
    <vat> -> <dai> [style=bold color=hotpink]
    <vat> -> <lad> [style=bold color=blue]
    <vat> -> <lad> [style=bold color=hotpink]
    <vat> -> <lad> [style=dashed color=blue]
    <vat> -> <vow> [style=bold color=blue]
    <vat> -> <vow> [style=bold color=hotpink]
    <vat> -> <vow> [style=bold color=red arrowhead=inv]
    <vow> -> <bog> [style=bold color=blue]
    <vow> -> <bog> [style=bold color=hotpink]
    <vow> -> <bog> [style=bold color=teal]
    <vow> -> <mkr> [style=bold color=teal]
    <vow> -> <vat> [style=bold color=hotpink]
    <vow> -> <vat> [style=dashed color=blue arrowhead=open]
  }
`, { engine: "neato" })}</div>`)
