document.write(`<h1>MakerDAO v525</h1>`)
document.write("<br>")
false && document.write(`
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

document.write(`<div style="float: left; eborder: .2rem solid #fc6; epadding: 1rem">${Viz(`
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

    <bog> [shape=tripleoctagon label=bog height=0.7]
    <vow> [shape=square style=bold]    
    <mkr> [label=MKR shape=septagon height=0.7]
    <dai> [label=DAI shape=septagon height=0.7]
    <vat> [shape=square style=bold]

    { edge [len=1.2];
    <bog> -> <vow> [label=<3 > style=bold color=teal]
    <vow> -> <bog> [label=<2 flap> style=bold color=hotpink]
    }
    
    <dai> -> <vat> [style=bold color=red arrowhead=inv]
    <vat> -> <dai> [style=bold color=red arrowhead=inv]
    <lad> -> <vat> [style=bold color=red arrowhead=inv]
    <vat> -> <lad> [style=bold color=red arrowhead=inv]

    <dai> -> <vat> [style=bold color=hotpink]
    <vat> -> <lad> [style=bold color=blue]
    <vat> -> <lad> [style=bold color=hotpink]
    <lad> -> <vat> [style=bold color=hotpink]
    <lad> -> <vat> [style=bold color=blue]
    <vat> -> <dai> [style=bold color=hotpink]
    <vat> -> <vow> [label=<     1  loot> style=bold color=hotpink]
    <vow> -> <mkr> [label=<4 boom   > style=bold color=teal]
  }
`, { engine: "neato" })}</div>`)

document.write(`<div style="float: left; position: relative; bottom: 0rem">${Viz(`
  digraph {
    node [fontname=monospace fontsize=12 shape=circle];
    edge [fontname=monospace fontsize=12];

    rankdir   = LR;
    labelloc  = t;
    labeljust = c;
    label     = <<b>Liquidation (expanded)</b>    >;
    fontname  = "sans-serif";
    fontsize  = 16;
    overlap = false;

    <vow1> [label=vow shape=square style=bold]    
    <vow2> [label=vow shape=square style=bold]    
    <vow3> [label=vow shape=square style=bold]    
    <bog3> [shape=tripleoctagon label=bog height=0.7]
    <dai> [label=DAI shape=septagon height=0.7]
    <mkr1> [label=MKR shape=septagon height=0.7]
    <mkr2> [label=MKR shape=septagon height=0.7]
    <vat> [label=urn color=red fontcolor=red style=dashed shape=invtrapezium]
    <bog1> [shape=tripleoctagon label=bog height=0.7]
    <bog2> [shape=tripleoctagon label=bog height=0.7]

    { edge [len=1.4];
    <vow2> -> <bog2> [label=<          2 flip> style=bold color=blue]
    <bog2> -> <vow2> [label=<3   > style=dashed color=blue]
    }

    { edge [len=1.2];
    <vow3> -> <bog3> [label=< 4 flap> style=bold color=hotpink]
    <bog3> -> <vow3> [label=<5    > style=bold color=teal]
    }
    
    { edge [len=1.25];
    <bog2> -> <vow3> [label=<     3> style=bold color=hotpink]
    }
    <vow3> -> <mkr2> [label=<6 boom     > style=bold color=teal]

    { edge [len=1.1];
    <bog1> -> <vow1> [label=<3 > style=bold color=hotpink len=1.2]
    <vow1> -> <bog1> [label=<flop 2           > style=bold color=teal len=1.2]
    }

    <mkr1> -> <vow1> [label=<       2  bust> style=bold color=teal len=1.4]
    <vow1> -> <dai> [label=<  4 burn> style=bold color=hotpink len=1.5]
    <vow1> -> <dai> [label=<  4> style=bold color=red arrowhead=inv len=1.5]
    <vat> -> <lad> [label=<shut 5         > style=dashed color=blue len=1.1]
    <vat> -> <vow1> [label=<       1  heal> style=bold color=red arrowhead=inv]
    <vat> -> <vow2> [label=<  1 grab> style=bold color=blue]
    <vow2> -> <vat> [label=<plop 4        > style=dashed color=blue arrowhead=open]
  }
`, { engine: "neato" })}</div>`)

document.write(`<div style="position: absolute; left: 2rem; top: 35rem">${Viz(`
  digraph {
    node [fontname=monospace fontsize=12 shape=circle];
    edge [fontname=monospace fontsize=12];

    rankdir   = LR;
    labelloc  = t;
    labeljust = l;
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
    <bog> -> <vow> [style=bold color=teal]
    <vow> -> <mkr> [style=bold color=teal]
    <bog> -> <vow> [style=dashed color=blue]
    <mkr> -> <vow> [style=bold color=teal]
    <vat> -> <lad> [style=dashed color=blue]
    <vat> -> <vow> [style=bold color=blue]
    <vat> -> <vow> [style=bold color=red arrowhead=inv]
    <vow> -> <bog> [style=bold color=blue]
    <vow> -> <bog> [style=bold color=hotpink]
    <vow> -> <bog> [style=bold color=teal]
    <vow> -> <dai> [style=bold color=hotpink]
    <vow> -> <dai> [style=bold color=red arrowhead=inv]
    <vow> -> <vat> [style=dashed color=blue arrowhead=open]
  }
`, { engine: "neato" })}</div>`)

document.write(`<div style="float: left; position: relative; left: 9rem">${Viz(`
  digraph {
    node [fontname=monospace fontsize=12 shape=circle];
    edge [fontname=monospace fontsize=12];

    #rankdir   = LR;
    labelloc  = t;
    labeljust = c;
    label     = <<b>All flows of value (expanded)</b>    >;
    fontname  = "sans-serif";
    fontsize  = 16;
    overlap = false;

    edge [len=1.3]

    <vow3> [label=vow shape=square style=bold]
    
    <bog1> [shape=tripleoctagon label=bog height=0.7]    
    <bog2> [shape=tripleoctagon label=bog height=0.7]    
    <bog3> [shape=tripleoctagon label=bog height=0.7]    
    <dai1> [label=DAI shape=septagon height=0.7]
    <mkr1> [label=MKR shape=septagon height=0.7]
    <mkr2> [label=MKR shape=septagon height=0.7]
    <urn2> [label=urn shape=invtrapezium]
    <vat5> [label=vat shape=square style=bold]
    <vow1> [label=vow shape=square style=bold]
    <vow2> [label=vow shape=square style=bold]
    <lad1> [label=lad]
    <dai2> [label=DAI shape=septagon height=0.7]

    <urn2> -> <vat5> [label=<bite> style=bold color=red arrowhead=inv]
    <vat5> -> <vow2> [label=<heal    > style=bold color=red arrowhead=inv]
    <vow2> -> <dai2> [style=bold color=red arrowhead=inv]
    <vow2> -> <dai2> [label=<burn> style=bold color=hotpink]
    <mkr1> -> <vow2> [label=<bust   > style=bold color=teal]
    <vow1> -> <mkr2> [label=<          boom> style=bold color=teal]

    <bog2> -> <vow1> [style=bold color=hotpink]

    <urn2> -> <vat5> [label=<poke> style=bold color=hotpink]
    <vat5> -> <vow1> [label=<      loot> style=bold color=hotpink]

    <urn2> -> <vow3> [label=<  grab> style=bold color=blue]
    <urn2> -> <lad1> [style=dashed color=blue]

    <dai1> -> <urn2> [style=bold color=red arrowhead=inv]
    <dai1> -> <urn2> [style=bold color=hotpink]
    <urn2> -> <dai1> [style=bold color=red arrowhead=inv]
    <urn2> -> <dai1> [style=bold color=hotpink]

    <urn2> -> <lad1> [style=bold color=red arrowhead=inv]
    <lad1> -> <urn2> [style=bold color=red arrowhead=inv]
    
    <vow3> -> <urn2> [label=<plop     > style=dashed color=blue]
    <bog1> -> <vow1> [style=bold color=teal]
    <vow1> -> <bog1> [label=<flap> style=bold color=hotpink]

    <vow2> -> <bog3> [style=bold color=teal]
    <bog3> -> <vow2> [label=<         flop> style=bold color=hotpink]

    <vow3> -> <bog2> [label=<flip> style=bold color=blue]
    <bog2> -> <vow3> [style=dashed color=blue]

    <lad1> -> <urn2> [style=bold color=blue]
    <lad1> -> <urn2> [style=bold color=hotpink]
    <urn2> -> <lad1> [style=bold color=hotpink]
    <urn2> -> <lad1> [style=bold color=blue]
  }
`, { engine: "neato" })}</div>`)

document.write(`<div style="float: left; position: relative; bottom: 11rem; right: 10rem">${Viz(`
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
    <dai> -> <vat> [style=bold color=red arrowhead=inv]
    <vat> -> <dai> [style=bold color=red arrowhead=inv]
    <lad> -> <vat> [style=bold color=red arrowhead=inv]
    <vat> -> <lad> [style=bold color=red arrowhead=inv]
    <vat> -> <vow> [style=bold color=red arrowhead=inv]
    <vow> -> <bog> [style=bold color=blue]
    <vow> -> <bog> [style=bold color=hotpink]
    <vow> -> <bog> [style=bold color=teal]
    <vow> -> <mkr> [style=bold color=teal]
    <vow> -> <dai> [style=bold color=hotpink]
    <vow> -> <dai> [style=bold color=red arrowhead=inv]
    <vow> -> <vat> [style=dashed color=blue arrowhead=open]
  }
`, { engine: "neato" })}</div>`)
