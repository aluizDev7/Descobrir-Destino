#HTML

-Hyper Text Markup Language
-Hyper Text: Textos Clicaveis (Links)
-Markup: Marcações (Tags)
-Attributes: Atributos (Propriedades das tags)
-Language: Linguagem (Maneira de se comunicar com o computador)
-Atributo alt é um texto alternativo para acessibilidade.

<abertura atributo>Conteúdo</fechamento>

https://gist.githubusercontent.com/maykbrito/0acdf4ce919838ffed50915a31fc5b23/raw/6f4dd01ec3116428ec4c99255944cb9ac7927590/cristal-ball.svg



#CSS

-Apresentação visual para o cliente
-Estilos para o HTML
-Cascading Style Sheets
 * Folha de Estilo em cascata.

 -Declaração
  * Seletor
  * Propriedade e Valor
   * seletor { propriedade: valor; }

 -Conceitos
  * Cascata
  * Especificidade
  * Box Model
   * Tudo em HTML são caixas, porque caixas possuem propriedades

   #DISPLAY-INLINE = DISPLAY EM LINHA: FICA UM AO LADO DO OUTRO


   #JAVASCRIPT

   -Variáveis
    * let = PODE mudar de Valor

      | let meuNome = "André"
      | console.log(meuNome)
      | meuNome = "Luiz"
      | console.log(meuNome)
      | -Vai retornar Luiz-
      |

    * const = NÂO Pode mudar de Valor

      | const meuNome = "André"
      | console.log(meuNome)
      | meuNome = "Luiz"
      | console.log(meuNome)
      | -Vai dar erro, mas caso funcione iria retornar André-
      |

  -Estruturas Condicionais
   * if, verificando a idade
    
    | let idade = 17
    | let maiorDeIdade = idade >= 18
    | if (maiorDeIdade) { 
    |  console.log("É maior de idade. Você pode dirigir!")
    | } else {
    |  console.log("Não é maior de idade. Você não pode dirigir!)
    | }
    |

  -Estruturas de Dados
    * Array = Listas || Vetores
    
    | const temperatura = [ 20, 22, 24, 26, 28 ] 
    | console.log("Hoje está fazendo: " + temperatura[0] + " graus celsius")
    | console.log("Hoje está fazendo: " + temperatura[1] + " graus celsius")
    | console.log("Hoje está fazendo: " + temperatura[2] + " graus celsius")
    | console.log("Hoje está fazendo: " + temperatura[3] + " graus celsius")
    | console.log("Hoje está fazendo: " + temperatura[4] + " graus celsius")
    |

   * Object = Recebe nome, propriedade, valor

    | let nome = {
    |  propriedade1: "valor",
    |  propriedade2: 2,
    |  propriedade3: true
    |  propriedade4: [ "A", 2, true "B" ]
    | }
    | console.log(nome.propriedade1)
    | console.log(nome.propriedade4[0])

  -Funções
    * function = existem 3 passos, criação, execução e parâmetros

    | function nome_da_funcao() {
    |  console.log("Olá, Mundo!")
    | }
    | nome_da_funcao()
    | 
    | function soma(value1, value2) {
    |  console.log(value1 + value2)
    | }
    | soma(10, 20)
    |
    | function soma(value1, value2) {
    |  return value1 + value2
    | }
    | console.log(soma(2, 3)) -5
    | console.log(soma(3,6) * 2) -18
    |

  -Operadores Matemáticos
  * Math.random, Math.floor, Math.ceil, Math.PI

    | let random = Math.random() -Gera um número randomico entre 0 e 1
    | let floor = Math.floor(1.5) -Arredonda o némro para baixo, nessa caso fica 1.0
    | let ceil = Math.ceil(1.5) -Arredonda o número para cima, nesse caso 2.0
    | let pi = Math.PI() -Retorna o valor de PI 3,1415....
    | 

  -Document Object Model - DOM
  * Tudo que é do documento se transforma em objeto, serve para manipular elementos

    | document.documentElement.style.background = "blue"
    | document.write("Texto")
    | window.alert("Texto") -Função do objeto window
    |

#DEFER - LEIA TODO O HTML E DEPOIS LEIA O SCRIPT
#REL - RELACIONAMENTO, GERALMENTE FICA NA TAG LINK E RELACIONA AO STYLESHEET