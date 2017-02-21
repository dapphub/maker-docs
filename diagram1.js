document.write(`
  <h1>MakerDAO v587</h1>
`)

document.write(`
  <table style="float: left; margin-left: 1rem">
    <tbody class=words>
      <tr><td><td style="text-align: left"><b>Actors & contracts</b></th></tr>
      <tr><th>cats</th><td>Keeper robots</td></tr>
      <tr><th>dao</th><td>CDP engine</td></tr>
      <tr><th>gals</th><td>Alpha Dynasty</td></tr>
      <tr><th>gems</th><td>Approved tokens</td></tr>
      <tr><th style="vertical-align: top">gov</th><td>Admin multisig<br>(to be replaced by<br>sentinel voting)</td></tr>
      <tr><th style="vertical-align: top">guys</th><td>Dai holders (any <br>Ethereum users)</td></tr>
      <tr><th>jars</th><td>Token vaults</td></tr>
      <tr><th style="vertical-align: top">lads</th><td>Dai issuers (e.g. <br>margin traders)</td></tr>
      <tr><th>mom</th><td>Dictator Rune</td></tr>
      <tr><th>pals</th><td>MKR holders</td></tr>
      <tr><th>rats</th><td>Price feed oracles</td></tr>
      <tr><th>top</th><td>Root authority</td></tr>
      <tr><th style="vertical-align: top">vow</th><td>Settler/liquidator</td></tr>
    </tbody>
    <tbody class=words>
      <tr><td><td style="text-align: left"><b>Parameters</b></th></tr>
      <tr><th>how</th><td>Sensitivity</td></tr>
    </tbody>
    <tbody class=words>
      <tr><td><td style="text-align: left"><b>Ilk parameters</b></th></tr>
      <tr><th>axe</th><td>Liquidation penalty</td></tr>
      <tr><th>hat</th><td>Debt ceiling</td></tr>
      <tr><th>lag</th><td>Limbo duration</td></tr>
      <tr><th>mat</th><td>Liquidation ratio</td></tr>
      <tr><th>tax</th><td>Stability fee</td></tr>
    </tbody>
  </table>
`)

document.write(`
  <div style="float: right; margin-right: 1rem">
  <table style="float: left; margin-right: 3rem">
    <tbody class=words>
      <tr><td><td style="text-align: left"><b>Messages</b></th></tr>
      <tr><th>bite</th><td>Disable red urn (CDP)</td></tr>
      <tr><th>burn</th><td>Destroy dai or MKR</td></tr>
      <tr><th>draw</th><td>Borrow dai against urn</td></tr>
      <tr><th>form</th><td>Create ilk (CDP type)</td></tr>
      <tr><th>free</th><td>Release collateral gems</td></tr>
      <tr><th>frob</th><td>Change <code>how</code> (sensitivity)</td></tr>
      <tr><th>give</th><td>Transfer urn ownership</td></tr>
      <tr><th>grab</th><td>Liquidate zombie urn</td></tr>
      <tr><th>heal</th><td>Eliminate bad dai debt</td></tr>
      <tr><th>kick</th><td>Perform settlement</td></tr>
      <tr><th>lock</th><td>Encumber collateral</td></tr>
      <tr><th>loot</th><td>Consume stability fees</td></tr>
      <tr><th>mark</th><td>Update <code>tag</code> and <code>zzz</code></td></tr>
      <tr><th>mint</th><td>Create dai or MKR</td></tr>
      <tr><th>mold</th><td>Change ilk parameter</td></tr>
      <tr><th>pull</th><td>Take gems into custody</td></tr>
      <tr><th>open</th><td>Create urn of certain ilk</td></tr>
      <tr><th>push</th><td>Release gems to owner</td></tr>
      <tr><th>suck</th><td>Arbitrarily create dai</td></tr>
      <tr><th>tell</th><td>Update <code>fix</code> (dai price)</td></tr>
      <tr><th>wipe</th><td>Cover dai debt of urn</td></tr>
    </tbody>
    <tbody class=words>
      <tr><td><td style="text-align: left"><b>Variables</b></th></tr>
      <tr><th>fix</th><td>Market price of dai</td></tr>
    </tbody>
    <tbody class=words>
      <tr><td><td style="text-align: left"><b>Jar variables</b></th></tr>
      <tr><th>tag</th><td>Market price (in SDR)</td></tr>
      <tr><th>zzz</th><td>Expiration date</td></tr>
    </tbody>
  </table>  
  <table style="float: right; margin-top: 2rem; margin-right: -1rem">
    <tbody class=symbols>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          rankdir=LR;
          node [shape=plaintext width=0 height=0]
          <> -> < > [arrowhead=open]
        }
      `)}</th><td>Regular message</td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          rankdir=LR;
          node [shape=plaintext width=0 height=0]
          <> -> < > [style=dashed arrowhead=open]
        }
      `)}</th><td>Special message</td></tr>
      <tr><td style="padding-top: 1rem"></td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          rankdir=LR;
          node [shape=plaintext width=0 height=0]
          <> -> < > [style=dotted arrowhead=open]
        }
      `)}</th><td>Planned message</td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          rankdir=LR;
          node [shape=plaintext width=0 height=0]
          <> -> < > [style=tapered arrowhead=open]
        }
      `)}</th><td>Banned message</td></tr>
      <tr><td style="padding-top: 1rem"></td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          rankdir=LR;
          node [shape=plaintext width=0 height=0]
          <> -> < > [arrowhead=odot]
        }
      `)}</th><td>Ownership</td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          rankdir=LR;
          node [shape=plaintext width=0 height=0]
          <> -> < > [arrowhead=dot]
        }
      `)}</th><td>Authority</td></tr>
      <tr><td style="padding-top: 2rem"></td></tr>
      <tr><th>${Viz(`
        digraph {
          <> [shape=square width=0.45 style=bold]
        }
      `)}</th><td>Contract</td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          <> [shape=septagon style=bold width=0.5]
        }
      `)}</th><td>ERC20 token</td></tr>
      <tr><td style="padding-top: 2rem"></td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          <> [shape=circle width=0.5]
        }
      `)}</th><td>Person (or bot)</td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          <> [shape=square width=0.45]
        }
      `)}</th><td>Bot (or person)</td></tr>
      <tr><td style="padding-top: 2rem"></td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          <> [shape=circle width=0.5 color=lightgray]
        }
      `)}</th><td>Temporary</td></tr>
      <tr><th style="padding: 0">${Viz(`
        digraph {
          <> [shape=circle width=0.4 peripheries=2]
        }
      `)}</th><td>Multiplicity</td></tr>
    </tbody>
  </table>
  </div>
`)

document.write(`<div style="display: inline-block; margin-top: 3.5rem; padding: 1rem 1rem 2rem">${Viz(`
  digraph {
    node [fontname=monospace fontsize=12 shape=circle];
    edge [fontname=monospace fontsize=12 style=dashed arrowhead=open];
    
    rankdir   = LR;
    labelloc  = t;
    labeljust = r;
    label     = <<b>Credit system</b>    >;
    fontname  = "sans-serif";
    fontsize  = 16;

    subgraph cluster_MakerDAO {
      fontname  = "sans-serif";
      label     = MakerDAO;
      labeljust = r;
      style     = bold;
      color     = lightgrey;
      fontcolor = grey;
      fontsize  = 12;

      node [style=bold]
      <dao> -> <dai>  [label=mint]
      <dao> -> <dai>  [label=burn]
      <dao> -> <jars> [label=push]
      <dao> -> <jars> [label=pull]
    }

    <cats> -> <dao> [style=solid label=bite]
    <lads> -> <dao> [style=solid label=free]
    <lads> -> <dao> [style=solid label=draw]
    <lads> -> <dao> [style=solid label=wipe]
    <lads> -> <dao> [style=solid label=lock]

    <rats> -> <dao> [label=tell]
    <rats> -> <jars> [label=mark]

    <lads> [shape=doublecircle]
    <rats> [shape=square peripheries=2]
    <cats> [shape=square peripheries=2]
    <dai>  [shape=septagon height=0.7]
    <dao>  [shape=square height=0.6]
    <jars> [shape=square peripheries=2]
  }
`)}</div>`)

document.write(`<br><div style="display: inline-block; padding-top: 3rem">${Viz(`
  digraph {
    node [fontname="monospace" fontsize="12" shape=circle];
    edge [fontname="monospace" fontsize="12" arrowhead=open];
    labelloc="t";
    labeljust="c";
    label=<<b>Control structure</b>        >;
    fontname="sans-serif";
    fontsize="16";

    { rank=same; <pals> -> <mom> -> <gals> [color=lightgray] }

    <mom> [color=lightgray fontcolor=gray]
    <gals> [color=lightgray fontcolor=gray]

    <pals> -> <gov> [style=dotted arrowhead=open]
    <gov> [shape=square style=bold]

    <top> [style=bold]
    <gals> -> <gov> [style=dashed color=lightgray]

    <pals> [shape=doublecircle]
    <gals> [shape=doublecircle color=lightgray fontcolor=gray]

    subgraph cluster_MakerDAO {
      fontname="sans-serif";
      label=<MakerDAO>;
      style=bold;
      labeljust="r";
      color="lightgrey";
      fontcolor="grey";
      fontsize="12";

      { <gov> -> <top> [arrowhead=odot] }
      edge [arrowhead=dot]
      node [style=bold]
      <gov>
      <dao> [shape=square height=0.6]
      <vow> [shape=square height=0.6]
      <top> -> <dao>
      <top> -> <vow>
      <top> -> <jars>
      <top> -> <mkr>
      <top> -> <dai>
      <dai> [shape=septagon height=0.7]
      <mkr> [shape=septagon height=0.7]
      <top> [shape=square]
      <jars> [shape=square peripheries=2]
    }
  }
`)}</div>`)

document.write(`<div style="display: inline-block; position: absolute; top: 2rem; right: 46rem">${Viz(`
  digraph {
    node [fontname="monospace" fontsize="12" shape=circle];
    edge [fontname="monospace" fontsize="12" style=dashed arrowhead=open];
    rankdir="LR";
    labelloc="t";
    labeljust="r";
    label=<<b>Incentive middleware</b>       >;
    fontname="sans-serif";
    fontsize="16";

    <cats> -> <vow> [style=solid, label="kick"]
    <cats> [shape=square peripheries=2]

    # <gals> -> <pop>
    # <gals> [shape=doublecircle]

      # <pop> [shape=square style=bold]
      # <pop> -> <dao> [label="frob"]
      # <pop> -> <dao> [label="mold"]
      # <pop> -> <dao> [label="form"]


    <gals> [shape=circle peripheries=2 color=lightgray fontcolor=gray]
    <pals> [shape=circle peripheries=2]
    <pals> -> <gov> [style=dotted arrowhead=open]
    <gals> -> <gov> [style=dashed color=lightgray arrowhead=open]

    subgraph cluster_MakerDAO {
      label="MakerDAO";
      fontname="sans-serif";
      style=bold;
      labeljust="r";
      color="lightgrey";
      fontcolor="grey";
      fontsize="12";

      node [style=bold]

      <vow> -> <dao> [label="heal"]
      <vow> -> <dao> [label="loot"]
      <vow> -> <dao> [label="grab"]
      <vow> -> <mkr> [label="mint"]
      <vow> -> <mkr> [label="burn"]
      <vow> -> <dai> [label="burn"]

      <gov> [shape=square style=bold]
      <gov> -> <dao> [label="frob"]
      <gov> -> <dao> [label="mold"]
      <gov> -> <dao> [label="form"]
      { rank=same; <gov> -> <vow> [style=tapered arrowhead=open label=<suck            >] }

      { <vow> -> <dai> [style=tapered arrowhead=open label=<mint         >] }

      <dai> [shape=septagon height=0.7]
      <mkr> [shape=septagon height=0.7]
      <vow> [shape=square style=bold height=0.6]
      <dao> [shape=square style=bold height=0.6]
    }
  }
`)}</div>`)

document.write(`<div style="display: inline-block; position: absolute; bottom: 1rem; right: 42rem">${Viz(`
  digraph {
    node [fontname="monospace", fontsize="12", shape=circle];
    edge [fontname="monospace", fontsize="12", style=dashed arrowhead=open];
    rankdir="LR";
    labelloc="t";
    label=<<b>Token interactions</b>    >;
    fontname="sans-serif";
    fontsize="16";

    subgraph cluster_MakerDAO {
      fontname="sans-serif";
      label=<MakerDAO>;
      labeljust="r";
      color="lightgrey";
      fontcolor="grey";
      style=bold;
      fontsize="12";
      node [style=bold]
      <dai> [shape=septagon height=0.7]
      <mkr> [shape=septagon height=0.7]
      <jars>
    }
    
    <jars> -> <gems> [style=solid label="ERC20" fontname="sans-serif"]
    <gems> [shape=septagon peripheries=2 height=0.7 style=bold]
    <jars> [shape=square peripheries=2]
    <lads> [shape=circle peripheries=2]
    <guys> [shape=circle peripheries=2]
    <pals> [shape=circle peripheries=2]
    <pals> -> <mkr>  [style=solid fontname="sans-serif" label="ERC20"]
    <lads> -> <gems> [style=solid fontname="sans-serif" label="ERC20"]
    <lads> -> <dai>  [style=solid fontname="sans-serif" label="ERC20"]
    <guys> -> <dai>  [style=solid fontname="sans-serif" label="ERC20"]
    <jars> <gems>
  }
`)}</div>`)
