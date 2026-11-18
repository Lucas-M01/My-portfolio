# Revisão de teclado, toque e reflow

Esta etapa preserva cores, layout e tamanho dos ícones:

- O botão de fechar mantém o ícone de 22 px, com área clicável de 44 × 44 px.
  As margens compensam o padding para manter a posição e o espaço no título.
- Os ícones do rodapé mantêm 20 px, com área clicável de 32 × 32 px e espaço
  entre os alvos. As margens compensam o padding sem deslocar os ícones.
- A descrição do projeto é uma região nomeada, acessível por Tab, para que
  seja possível rolar o texto com o teclado. O contorno de foco fica dentro
  da região para evitar que seja recortado pelo contêiner.

## Verificação automatizada

A suíte cobre abertura/fechamento por teclado, carrossel, restauração e
contenção do foco, rolagem da descrição e dimensões dos controles.

As verificações de viewport incluem 390 × 844, 320 × 568 e 640 × 450 px.
O último representa a área útil de uma janela de 1280 × 900 com zoom de 200%:
é uma verificação de **reflow equivalente**, sem controlar o zoom da interface
do navegador. Não substitui uma revisão manual com zoom e leitor de tela em
diferentes navegadores.

Os testes conferem ausência de rolagem horizontal na página, limites do modal
e uma área de descrição utilizável e rolável. Isso não representa uma
certificação completa de conformidade WCAG.
