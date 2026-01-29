# Verificação de Estado dos Toggle Buttons

## Visão Geral

Este documento explica o passo a passo da função `verifyAllTogglesState()` que verifica se **todos** os toggleBtn estão inativos ou ativos. Esta função envia mensagens no console quando:
- Ao clicar em **"Active"**: se todos os toggleBtn estão **inativos**
- Ao clicar em **"Inactive"**: se todos os toggleBtn estão **ativos**

---

## Objetivo da Função

Fornecer feedback ao usuário (via console) quando ele tenta filtrar extensões ativas/inativas, mas nenhuma existe nesse estado. Isso ajuda a detectar quando a lista estaria vazia.

---

## Passo a Passo da Solução

### **Passo 1: Contar os toggleBtn ativos**

```javascript
let activeCount = 0;

toggleBtn.forEach(btn => {
  if (btn.classList.contains("active")) {
    activeCount++;
  }
});
```

**Explicação:**
- Cria uma variável `activeCount` iniciando com `0`
- Itera sobre TODOS os toggleBtn (`toggleBtn` é um NodeList de todos os botões)
- Verifica se cada botão possui a classe `"active"`
- Incrementa `activeCount` para cada botão ativo encontrado

**Resultado:** `activeCount` = número total de toggleBtn com a classe "active"

---

### **Passo 2: Calcular o total de toggleBtn**

```javascript
const totalToggles = toggleBtn.length;
```

**Explicação:**
- Armazena o número total de toggleBtn disponíveis na página
- `toggleBtn.length` retorna a quantidade de elementos na NodeList

**Resultado:** `totalToggles` = número total de todos os toggleBtn

---

### **Passo 3: Comparar estados e exibir mensagem**

```javascript
if (filterType === "Active" && activeCount === 0) {
  // Se clicou em "Active" e TODOS estão inativos
  console.log("todos os toggleBtn estão inativos");
} else if (filterType === "Inactive" && activeCount === totalToggles) {
  // Se clicou em "Inactive" e TODOS estão ativos
  console.log("todos os toggleBtn estão ativos");
}
```

**Explicação:**

**Primeira Condição:** `filterType === "Active" && activeCount === 0`
- `filterType === "Active"` → usuário clicou no botão "Active"
- `activeCount === 0` → não há nenhum toggleBtn ativo
- **Resultado:** Envia `"todos os toggleBtn estão inativos"` no console

**Segunda Condição:** `filterType === "Inactive" && activeCount === totalToggles`
- `filterType === "Inactive"` → usuário clicou no botão "Inactive"
- `activeCount === totalToggles` → todos os toggleBtn estão ativos
- **Resultado:** Envia `"todos os toggleBtn estão ativos"` no console

---

### **Passo 4: Integração com a função filterExtensions()**

```javascript
function filterExtensions(filterType){
  // ... código anterior de filtro ...
  
  // Chamar a função de verificação ao final
  verifyAllTogglesState(filterType);
}
```

**Explicação:**
- A função `verifyAllTogglesState()` é chamada após executar a lógica de filtro
- Recebe `filterType` como parâmetro ("All", "Active" ou "Inactive")
- Desta forma, a verificação ocorre toda vez que um filtro é selecionado

---

## Fluxo Completo

```
1. Usuário clica no botão "Active" ou "Inactive"
   ↓
2. A função filterExtensions(filterType) é chamada
   ↓
3. Os boxes são filtrados (mostrados/ocultados)
   ↓
4. A função verifyAllTogglesState(filterType) é chamada
   ↓
5. Verifica se activeCount === 0 (se filterType === "Active")
   OU
   Verifica se activeCount === totalToggles (se filterType === "Inactive")
   ↓
6. Envia mensagem apropriada no console.log
```

---

## Exemplo de Uso

### Cenário 1: Todos os toggleBtn estão inativos
```javascript
// Usuário clica em "Active"
// console.log output:
"todos os toggleBtn estão inativos"
```

### Cenário 2: Todos os toggleBtn estão ativos
```javascript
// Usuário clica em "Inactive"
// console.log output:
"todos os toggleBtn estão ativos"
```

### Cenário 3: Alguns toggleBtn estão ativos, outros inativos
```javascript
// Usuário clica em "Active" ou "Inactive"
// console.log output:
(nenhuma mensagem, pois a condição não é atendida)
```

---

## Conclusão

A função `verifyAllTogglesState()` é uma ferramenta simples e eficiente para:
✅ Verificar o estado completo dos toggleBtn  
✅ Fornecer feedback visual (console) ao usuário  
✅ Melhorar a experiência ao detectar listas vazias  
✅ Facilitar debugging e testes
