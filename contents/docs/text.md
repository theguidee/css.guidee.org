---
title: Textos - Css Guide
description: Aprenda como estilizar os seus textos com as propriedades do CSS através de uma explicação clara e exemplos práticos.
---

# Textos

Nesta seção iremos ver algumas propriedades para usarmos nos nossos textos, veremos como utilizar itálicos, sublinhados, alterar a fonte e muito mais.

## Font size

Com a propriedade **font-size** definimos o tamanho da fonte.

<Code language="css">

```css

h2 {
  font-size: 22px;
}

```
</Code>

Você também pode utilizar valores pré definidos, como:

- **xx-small**
- **x-small**
- **small**
- **medium / padrão**
- **large**
- **x-large**
- **xx-large**
- **smaller (relativo ao elemento pai)**
- **larger (relativo ao elemento pai)**

<SimpleExample property="font-size" />

## Font weight

Esta propriedade define como deve ser a **largura da fonte**, se ela deve ser mais fina ou mais grossa.

<Code language="css">

```css

p {
  font-weight: 400;
}

```
</Code>

Seus possíveis valores são:

- **100 / thin**
- **200 / extra-light**
- **300 / light**
- **400 / normal**
- **500 / medium**
- **600 / semi-bold**
- **700 / bold**
- **800 / extra-bold**
- **900 / black**

<SimpleExample property="font-weight" />

## Font family

Com essa propriedade definimos qual fonte vamos utilizar para nossos textos, você pode definir nomes genéricos como:

- **serif**
- **sans-serif**
- **monospace**
- **cursive**
- **fantasy**

Ou fazer o **import** de alguma fonte através do [google fonts](https://fonts.google.com);

<Code language="css">

```css

body {
  font-family: "Nunito Sans", Helvetica, sans-serif;
}

```
</Code>

Você pode passar mais de uma família de fonte, caso a primeira de algum problema de carregamento, o _browser_ vai tentar carregar a segunda opção, e assim por diante.

Nesse exemplo, o _browser_ vai tentar usar a fonte **Nunito Sans**, caso ocorra algum problema de carregamento, ele vai tentar usar a **Helvetica**, se essa não estiver disponível também, o _browser_ vai carregar qualquer fonte sem serifas (sans-serif).

<SimpleExample property="font-family" />

## Font style

Permite aplicar itálico no texto.

<Code language="css">

```css

span {
  font-style: italic;
}

```
</Code>

Seus possíveis valores são:

- **normal**
- **italic**
- **oblique**

<SimpleExample property="font-style" />

## Color

Com a propriedade **color** nós podemos definir a cor dos textos, as cores podem ser nomeadas, em hexadecimal, rgb/a e hsl/a.

<Code language="css">

```css

h2 {
  color: rgba(0, 0, 0, .6);
}


```
</Code>

<SimpleExample property="color" />

## Text decoration

A decoração do texto é definida pela propriedade **text-decoration**

<Code language="css">

```css

a {
  text-decoration: none;
}

```
</Code>

Seu valores são:

- **underline**
- **overline**
- **line-through**
- **none**

<SimpleExample property="text-decoration" />

## Text align

Podemos uar o propriedade **text-align** para alinhar o texto.

<Code language="css">

```css

a {
  text-align: center;
}

```
</Code>

Seu valores são:

- **center**
- **right**
- **left**
- **end**
- **start**
- **justify**

<SimpleExample property="text-align" />

## Text transform

Com o **text-transform** podemos definir se queremos nosso texto todo em caixa alta, ou tudo minúsculo ou deixar apenas as primeiras letras como maiúsculas.

<Code language="css">

```css

h1 {
  text-transform: uppercase;
}

```
</Code>

Aceitas os seguintes valores:

- **uppercase**
- **lowercase**
- **capitalize**
- **none**

<SimpleExample property="text-transform" />

## Line height

O **line-height** serve para alterar a altura da linha do texto.

<Code language="css">

```css

h1 {
  line-height: 20px;
}

```
</Code>

<SimpleExample property="line-height" />

## Letter spacing

Com essa propriedade é possível modificar o espaçamento entre as letras do texto.

<Code language="css">

```css

h1 {
  letter-spacing: 3px;
}

```
</Code>

<SimpleExample property="letter-spacing" />
