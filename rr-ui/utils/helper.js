function insertNodeAt(fatherNode, node, position) {
  const refNode =
    position === 0
      ? fatherNode.children[0]
      : fatherNode.children[position - 1].nextSibling
  fatherNode.insertBefore(node, refNode)
}

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node)
  }
}

function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  )
}

export { insertNodeAt, removeNode, runPromiseInSequence }
