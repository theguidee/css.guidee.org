---
title: Box Model - Css Guide
description: Aprenda sobre o modelo de caixa do CSS (Box Model), que define a forma como o espaço é distribuído em torno do nosso conteúdo HTML, através de uma explicação clara e exemplos práticos.
---

# Box Model

Quando vamos trabalhar com elementos HTML, devemos olhar para eles como se fossem pequenas caixas, cada elemento é como se fosse uma pequena caixa com várias partes.

É aí que entra a **Box Model** do CSS! Ela ajuda a definir e controlar essas partes (conteúdo, preenchimento, borda e margem) para que o elemento fique com o layout desejado.

Com essa técnica, você pode ajustar a aparência e o espaço ocupado por cada elemento na página, garantindo que sua página fique bonita e organizada em diferentes dispositivos.

## Principais propriedades

A **Box Model** é composta por quatro propriedades principais que definem a aparência e o espaço ocupado por cada elemento na página:

- Conteúdo (content): é a área onde o conteúdo do elemento é exibido, podemos ajustar essa area modificando a altura e largura do nosso elemento (height/width);
- Preenchimento (padding): define o espaçamento entre o conteúdo e a borda do elemento;
- Borda (border): define a borda do elemento;
- Margem (margin): define o espaço entre a borda do elemento e o elemento adjacente.

## Width

Com a propriedade **width** podemos definir a largura da nossa caixa.

<Code language="css">

```css

div {
  width: 100px;
}

```
</Code>

<SimpleExample property="width" />

## Height

Com a propriedade **height** podemos definir a altura da nossa caixa.

<Code language="css">

```css

section {
  height: 100%;
}

```
</Code>

<SimpleExample property="height" />

## Margin

Com a propriedade **margin** podemos definir um espaçamento externo em nosso elemento

<Code language="css">

```css

.classe, elemento {
  margin: 10px;
}

```
</Code>


<SimpleExample property="margin-right" />

## Padding

Com a propriedade **padding** podemos definir um espaçamento interno em nosso elemento.

<Code language="css">

```css

.classe, elemento {
  padding: 10px;
}

```
</Code>

<SimpleExample property="padding-left" />

## Border

Os estilos da borda podem ser divididos em três partes:

- Largura
- Estilo
- cor

Para determinar a largura da borda utilizamos a propriedade **border-width**.

<SimpleExample property="border-width" />

Para alterar o estilo da borda utilizamos a propriedade **border-style**.

Seus possíveis valores são:

- dotted
- dashed
- solid
- double
- groove
- ridge
- inset
- outset

<SimpleExample property="border-style" />

E por fim, a propriedade **border-color** para alterar a cor da borda.

<SimpleExample property="border-color" />

## Border Radius

Com a propriedade **border-radius** podemos adicionar algum arredondamento nas bordas.

<SimpleExample property="border-radius" />
