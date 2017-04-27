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

    <fdn> [label=stiftung shape=triangle]
    <dev> [shape=doublecircle]
    <dss> [label=DSS shape=square style=bold]

    <gov> [label=prism, shape=triangle]
    <dlg> [label=delegates, shape=doublecircle]

    <mkr> [label=MKR shape=doublecircle]
    <dai> [label=DAI shape=doublecircle]

    <dss> -> <dai>
    <dss> -> <mkr>

    <mkr> -> <gov> [label=votes]
    <gov> -> <dlg> [label=elects]
    <dlg> -> <dss> [label=adjusts]
  }
`, { engine: "dot" })}</div>`)
