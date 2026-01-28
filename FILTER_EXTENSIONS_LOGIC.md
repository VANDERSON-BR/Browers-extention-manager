# Lógica de Filtro de Extensões

## Visão Geral

Este documento explica passo a passo como funciona o sistema de filtro de extensões (All, Active, Inactive).

---

## Passo 1: Capturar os Elementos DOM

```javascript
const navBtn = document.querySelectorAll(".extension-list .btn");
const boxList = document.querySelectorAll(".box-list");
```

- `navBtn`: Seleciona todos os botões de filtro (All, Active, Inactive)
- `boxList`: Seleciona todas as extensões (.box-list)

---

## Passo 2: Função de Filtro

```javascript
function filterExtensions(filterType) {
  boxList.forEach((box) => {
    const toggleBtn = box.querySelector(".toggle-btn");
    const isActive = toggleBtn.classList.contains("active");

    // Determinar se a extensão deve ser visível
    let shouldShow = false;

    if (filterType === "All") {
      shouldShow = true;
    } else if (filterType === "Active") {
      shouldShow = isActive;
    } else if (filterType === "Inactive") {
      shouldShow = !isActive;
    }

    // Mostrar ou esconder a extensão
    if (shouldShow) {
      box.classList.remove("hidden");
    } else {
      box.classList.add("hidden");
    }
  });
}
```

### Como Funciona:

1. **Percorre cada extensão** (`boxList.forEach()`)

2. **Procura o toggle dentro dela**

   ```javascript
   const toggleBtn = box.querySelector(".toggle-btn");
   ```

3. **Verifica se está ativada**

   ```javascript
   const isActive = toggleBtn.classList.contains("active");
   ```

4. **Lógica de Filtro:**
   - **"All"**: Mostra TUDO (`shouldShow = true`)
   - **"Active"**: Mostra APENAS as com toggle ligado (`shouldShow = isActive`)
   - **"Inactive"**: Mostra APENAS as com toggle desligado (`shouldShow = !isActive`)

5. **Aplica a classe CSS:**
   - Se `shouldShow` é `true` → remove `.hidden` (mostra)
   - Se `shouldShow` é `false` → adiciona `.hidden` (esconde)

---

## Passo 3: Adicionar Evento aos Botões

```javascript
navBtn.forEach((button) =>
  button.addEventListener("click", () => {
    // Remove a classe "active" de todos os botões
    navBtn.forEach((btn) => btn.classList.remove("active"));
    // Adiciona a classe "active" ao botão clicado
    button.classList.add("active");

    // Chamar função de filtro com o texto do botão
    const filterType = button.textContent.trim();
    filterExtensions(filterType);
  }),
);
```

### Como Funciona:

1. **Percorre cada botão de filtro**

   ```javascript
   navBtn.forEach((button) => {
   ```

2. **Ao clicar no botão:**
   - Remove `.active` de TODOS os botões
   - Adiciona `.active` apenas ao botão clicado (deixa destacado)

3. **Pega o texto do botão**

   ```javascript
   const filterType = button.textContent.trim(); // "All", "Active" ou "Inactive"
   ```

4. **Chama a função de filtro** com o tipo selecionado
   ```javascript
   filterExtensions(filterType);
   ```

---

## CSS Necessário

```css
/* Classe para esconder extensões no filtro */
.hidden {
  display: none !important;
}
```

---

## Fluxo Completo

```
Usuário clica em "Active"
    ↓
filterExtensions("Active") é chamada
    ↓
Para cada .box-list:
  - Verifica se o .toggle-btn tem classe "active"
  - Se SIM → mostra (remove .hidden)
  - Se NÃO → esconde (adiciona .hidden)
    ↓
Apenas extensões ativas aparecem na tela
```

---

## Resumo dos 3 Passos

| Passo | Ação                   | Resultado                                      |
| ----- | ---------------------- | ---------------------------------------------- |
| 1     | Capturar elementos     | Temos acesso aos botões e extensões            |
| 2     | Criar função de filtro | Lógica para mostrar/esconder baseado no filtro |
| 3     | Adicionar eventos      | Ao clicar no botão, executa o filtro           |
