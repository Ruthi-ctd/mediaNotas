let notas = [10, 9, 8, 7]

let media =
  notas.reduce((acc, atual) => {
    let sum = acc + atual
    console.log(`Soma: ${sum}`)
    return sum
  }, 0) / notas.length

console.log(`A média é: ${media}`)

notas.forEach(e => {
  let mensagem
  if (e >= 7) {
    mensagem = `Parabens pela conclusao do ${
      notas.indexOf(e) + 1
    }º bimestre. Suas nota foi: ${e}.`
  } else {
    mensagem = `Comunicamos que voce infelizmente foi reprovado no  ${
      notas.indexOf(e) + 1
    }º bimestre. Suas nota foi: ${e}.`
  }
  console.log(mensagem)
})
