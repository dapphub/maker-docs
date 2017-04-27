document.write(`<div style="float: left; margin-left: 2rem">${Viz(`
  digraph {
    node [fontname=monospace fontsize=12 shape=circle];
    edge [fontname=monospace fontsize=12];

    rankdir   = LR;
    labelloc  = t;
    labeljust = l;
    label     = <<b>Governance</b>>;
    fontname  = "sans-serif";
    fontsize  = 12;

    <fdn> [label=stiftung shape=triangle height=1.2]
    <dev> [shape=doublecircle]

    <gov> [label=prism shape=square style=bold height=1]
    <dlg> [label=delegates shape=doublecircle]

    <mkr> [label=MKR shape=circle peripheries=3]
    <dai> [label=DAI shape=circle peripheries=3]

    subgraph cluster_DSS {
      fontname = "sans-serif"
      label    = "Dai StableCoin System"
      labelloc = bottom
      style    = bold
      color    = lightgrey

      node [style=bold]
      <vox> [shape=square height=0.6]
      <vat> [shape=square height=0.6]
      <vow> [shape=square height=0.6]
    }

    <vat> -> <dai> [label=provides]

    <fdn> -> <dev> [label=hires]

    <mkr> -> <gov> [label=votes]
    <gov> -> <dlg> [label=elects]

    <rats> [shape=square peripheries=2]
    <rat>  [shape=square style=bold]
    <dlg>  -> <rats> [label=selects]
    <rats> -> <rat>  [label=combine]
    <rat>  -> <vox>  [label=tell]

    <vow> -> <mkr> [label="market incentives"]

    edge [style=dashed minlen=2]
    <dlg> -> <vox> [label="adjust: sensitivity"]
    <dlg> -> <vat> [label="adjust: risk params"]
    <dlg> -> <vow> [label="adjust: liquidation"]
  }
`, { engine: "dot" })}</div>`)
