export function toggleLesson(module, lesson) {
  return {
    type: "TOGGLE_LESSON",
    module,
    lesson,
  };
}

export function adicionarCarrinho(state, roupas) {
  return {
    type: "ADICIONAR_CARRINHO",
    roupas: [...state, roupas]
  };
}
