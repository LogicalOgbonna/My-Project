var express = require("express");
var router = express.Router();
var jsgraphs = require("js-graph-algorithms");
var xlsxj = require("xlsx-to-json");
// const file = require("./Book1.xlsx");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/column", (req, res) => {
  xlsxj(
    {
      input: "./column.xlsx",
      output: "output.json"
    },
    function(err, result) {
      if (err) {
        res.status(400).json(err);
      } else {
        if (result) {
          // console.log(result);
          var g = new jsgraphs.WeightedGraph(4);
          result.map(data => {
            g.addEdge(
              new jsgraphs.Edge(
                parseInt(data.from, 10),
                parseInt(data.to, 10),
                parseInt(data.distance, 10)
              )
            );
            var kruskal = new jsgraphs.KruskalMST(g);
            var mst = kruskal.mst;
            const dataArray = [];
            for (var i = 0; i < mst.length; ++i) {
              var e = mst[i];
              var v = e.either();
              var w = e.other(v);
              // console.log("(" + v + ", " + w + "): " + e.weight);
              // dataArray.push("(" + v + ", " + w + "): " + e.weight);
            }

            // res.json(dataArray);
          });
        }
      }
    }
  );
});

router.get("/matrix", (req, res) => {
  // xlsxj(
  //   {
  //     input: "./matrix.xlsx",
  //     output: "output.json"
  //   },
  //   function(err, result) {
  //     if (err) {
  //       res.status(400).json(err);
  //     } else {
  //       if (result) {
  //         req.body.upload = result[0];
  //         console.log(result[0]);
  //         res.json(result);
  //         // result.map(data => console.log(data));
  //       }
  //     }
  //   }
  // );

  const graph = [
    {
      from: 1,
      to: 2,
      difference: 3,
      label: "Ikom"
    },
    {
      from: 2,
      to: 3,
      difference: 1,
      label: "Abuja"
    },
    {
      from: 1,
      to: 3,
      difference: 2,
      label: "Lagos"
    }
  ];

  var g = new jsgraphs.WeightedGraph(4);

  graph.map(data => {
    g.addEdge(new jsgraphs.Edge(data.from, data.to, data.difference));
  });

  var kruskal = new jsgraphs.KruskalMST(g);
  var mst = kruskal.mst;
  const dataArray = [];
  for (var i = 0; i < mst.length; ++i) {
    var e = mst[i];
    var v = e.either();
    var w = e.other(v);
    dataArray.push("(" + v + ", " + w + "): " + e.weight);
  }

  res.json(dataArray);
});

router.get("/mine", (req, res) => {
  console.log(req.body.upload);
  var g = new jsgraphs.WeightedGraph(4);

  g.addEdge(new jsgraphs.Edge(0, 2, 2));
  g.addEdge(new jsgraphs.Edge(0, 1, 3));
  g.addEdge(new jsgraphs.Edge(1, 3, 2));
  g.addEdge(new jsgraphs.Edge(0, 3, 5));
  g.addEdge(new jsgraphs.Edge(2, 3, 1));

  var kruskal = new jsgraphs.KruskalMST(g);
  var mst = kruskal.mst;
  let final;
  for (var i = 0; i < mst.length; ++i) {
    var e = mst[i];
    var v = e.either();
    var w = e.other(v);
    console.log("(" + v + ", " + w + "): " + e.weight);
    // res.json("(" + v + ", " + w + "): " + e.weight);
  }
});

module.exports = router;
