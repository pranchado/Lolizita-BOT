const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
ใ ๐๐ฎ Tic Tac Toe ๐ฎ๐ใ

ใโ NOME: ${pushname} ใ

ใ  โฃ Vitรณrias: ${userWins} ๐ใ
ใ  โฃ Derrotas: ${userDefeats} ๐ฅใ
ใ  โฃ Empates : ${userTies} ๐ใ
ใ  โฃ Pontos  : ${userPoints} โจใ
`
}

exports.tttme = tttme