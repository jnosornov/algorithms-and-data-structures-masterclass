// Building an uniderected graph

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return
    this.adjacencyList[vertex] = []
  }
  addEdge(v1,v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }
}