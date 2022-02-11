function clicar() {
    let produto = window.prompt('Que produto você está comprando?')
    let preco = window.prompt(`Quanto custa o ${produto} que você está comprando?`)
    let valor = window.prompt(`Qual foi o valor que você deu pra pagar o ${produto}?`)
    let s = valor - preco
    window.alert(`Você comprou ${produto} que custou ${preco}. Deu ${valor} em dinheiro e vai receber ${s}. Volte Sempre!`)

}
