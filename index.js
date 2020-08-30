const jsontoyaml = require("json2yaml");

const workflow = {
  on: "push",
  jobs: {
    build: {
      "runs-on": "ubuntu-latest",
      steps: [
        {
          uses: "actions/checkout@v2",
        },
        {
          run: "npm install",
          env: {
            TOKEN: "${{ secrets.TOKEN }}",
          },
        },
        {
          run: "npm test",
        },
      ],
    },
  },
};

console.log(jsontoyaml.stringify(workflow));
