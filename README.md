<div align="center">

# 🏠 SmartHome

### Interface de gestão doméstica inteligente

Protótipo de interface para um **gestor digital da casa**, pensado para um comando tátil (tipo tablet) que permite controlar os dispositivos IoT de toda a habitação a partir de um único ponto.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📋 Informações

| | |
|---|---|
| 👥 **Autores** | Pedro Rosa ([@pedrorosa3](https://github.com/pedrorosa3)), Tiago Raposo, Tomás Nogueira e Diogo Sousa |
| 📅 **Data** | Ano letivo 2023/2024 |
| 🎓 **Contexto** | Projeto académico de Interação e Conceção de Interfaces |
| 🖥️ **Resolução alvo** | 1280 × 720 px (horizontal) |

---

## 💡 Sobre o projeto

O **SmartHome** foi desenvolvido no âmbito de um desafio universitário focado em **inovação, criatividade e usabilidade**. O objetivo foi prototipar uma interface que permita aos residentes controlar a casa de forma centralizada, sem terem de se deslocar a cada divisão.

**Pilares do design:**

- 🧭 **Experiência do utilizador** — navegação intuitiva e prevenção de erros
- ✅ **Usabilidade** — respeito pelas heurísticas de avaliação
- 🎨 **Interação rica** — ícones, imagens e feedback visual para lá do texto

---

## ✨ Funcionalidades

### ❄️ Ar condicionado
- Controlo por divisão: sala, quarto, cozinha, escritório ou toda a casa
- Ajuste da temperatura e da intensidade da ventoinha
- Ligar / desligar cada unidade individualmente

### 💡 Luzes e 🪟 Estores
- Controlo por divisão e para a casa inteira

### ⏰ Agendamentos
- Criar e consultar agendamentos para AC, luzes e estores

### 🍎 Cozinha inteligente
- **Frigorífico e despensa:** consulta do inventário atual
- **Detalhes dos produtos:** validade e informação nutricional
- **Compras:** listas de produtos sugeridos e finalização da encomenda diretamente na interface
- **Receitas:** sugestões com base nos produtos disponíveis

---

## 🚀 Como executar

O projeto é composto apenas por HTML, CSS e JavaScript — **não precisa de instalação nem de servidor**.

### 1. Clonar o repositório

```bash
git clone https://github.com/pedrorosa3/SmartHome.git
cd SmartHome
```

### 2. Abrir no browser

**Opção A — abrir diretamente**

Faça duplo clique em `home.html` ou abra-o num browser moderno (Chrome, Edge, Firefox).

**Opção B — servidor local (recomendado)**

```bash
# Com Python
python -m http.server 8000

# ou com Node.js
npx serve .
```

Depois aceda a **http://localhost:8000/home.html**.

> 💡 **Dica:** a interface foi desenhada para **1280 × 720 px**. Use o modo de dispositivo das ferramentas de programador do browser (`F12` → `Ctrl+Shift+M`) e defina essa resolução para a melhor experiência.

---

## 🎯 Cenário de demonstração

> Está na **sala** a ver o jogo da seleção nacional e começa a ficar calor.
>
> 1. Ligue o **AC da sala**.
> 2. Defina a temperatura para **25 ºC**.
> 3. Coloque a ventoinha no **mínimo**.
> 4. Desligue o **AC da sala de jantar**, já que não está lá ninguém.

O enunciado completo dos cenários de tarefas está em [`Cenarios_de_Tarefas_IC23.pdf`](Cenarios_de_Tarefas_IC23.pdf).

---

## 📁 Estrutura do projeto

```
SmartHome/
├── home.html              # Página inicial
├── divisoes.html          # Escolha da divisão
├── sala.html, quarto.html, cozinha.html, escritorio.html, geral.html
├── ac-*.html              # Controlo do ar condicionado
├── l-*.html               # Controlo das luzes
├── estores-*.html         # Controlo dos estores
├── agendamentos.html      # Lista e criação de agendamentos
├── frig2.html, disp2.html # Frigorífico e despensa
├── sugeridos-*.html       # Produtos sugeridos
├── pagamento*.html        # Finalização de compras
├── receitas.html          # Receitas
├── comportamento*.js      # Lógica de cada página
├── style.css              # Estilos globais
└── images/                # Ícones e imagens
```

---

## ⚙️ Notas técnicas

- **Persistência de estado:** as definições (por exemplo, a última temperatura escolhida) ficam guardadas no browser através de *Local Storage*.
- **Dados:** não existe backend nem base de dados — os dados são simulados para fins de demonstração.
- **Autenticação:** assume-se que o utilizador já tem sessão iniciada.

---

<div align="center">

Feito por **Pedro Rosa**, **Tiago Raposo**, **Tomás Nogueira** e **Diogo Sousa** · 2023/2024

*Protótipo desenvolvido para fins educativos.*

</div>
