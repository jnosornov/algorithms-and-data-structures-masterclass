// Building an uniderected graph

class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return
    this.adjacencyList[vertex] = []
  }
}