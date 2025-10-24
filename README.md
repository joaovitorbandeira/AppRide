# AppRide

Bem-vindo ao **AppRide**, uma aplicação web simples construída com HTML, CSS e JavaScript, focada em exibir visualizações como velocidade, armazenar dados localmente e facilitar o entendimento de métricas de desempenho.

## 🧰 Tecnologias usadas

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- Armazenamento local (localStorage)  
- Visualização simples via manipulação DOM 
- Arquitetura de arquivos:
  - `index.html` – página principal  
  - `index.js` – lógica principal  
  - `detail.html` / `detail.js` – página de detalhe  
  - `speedometer.html` / `speedometer.js` – visualização tipo velocímetro  
  - `storage.js`, `dataManager.js` – manipulação de dados/armazenamento  
  - `global.css` – estilos globais  

## ✅ Funcionalidades

- Interface inicial com métricas básicas (velocidade, etc)  
- Página de detalhe para vista expandida das medições  
- Visualização de “velocímetro” para exibição de velocidade em tempo real  
- Persistência de dados via armazenamento local — dados permanecem entre sessões  
- Estilos simples & responsivos para funcionamento em desktop ou mobile  (mobile-first)

## 🚀 Como rodar localmente

1. Clone este repositório  
   ```bash
   git clone https://github.com/joaovitorbandeira/AppRide.git
   cd AppRide
