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
2. Abra o arquivo `index.html` no seu navegador favorito (ex: Chrome, Firefox)  
3. Para testar funcionalidades como armazenamento ou medição, interaja com a UI ou modifique `index.js` conforme suas necessidades  
4. (Opcional) Ative um servidor local (via Live Server, `python ‑m http.server`, etc) para evitar restrições de arquivo direto no navegador  

## 🧩 Possíveis melhorias

- Suporte a backend (API) para persistência real em servidor, não só localStorage  
- Autenticação de usuário e perfis personalizados  
- Dashboard com gráficos mais ricamente (ex: usando Chart.js, D3.js)  
- Testes unitários e integração automática  
- Empacotamento com Webpack ou outra solução de build  
- Otimização para mobile (PWA)  

## 🎯 Público‑alvo

Este projeto se destina a **desenvolvedores** ou entusiastas que desejam:

- Entender conceitos básicos de medição e visualização em JavaScript  
- Ter uma base leve para prototipagem de dashboards de desempenho  
- Expandir o sistema para cenários mais complexos com persistência real  

## 📝 Licença

Este projeto está licenciado sob a [MIT License](LICENSE) — sinta‑se à vontade para reutilizá‑lo, adaptá‑lo e contribuí‑lo conforme suas necessidades.
 
