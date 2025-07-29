# Controle do Direito - Site Institucional

## Visão Geral

Este é o site institucional da **Controle do Direito**, uma plataforma educacional especializada em Direito Empresarial e Compliance. O site inclui páginas institucionais, sistema de blog com CRUD completo, formulário de contato funcional e política de privacidade.

## Estrutura do Projeto

```
site-institucional/
├── index.html                 # Página principal
├── css/
│   └── styles.css            # Estilos principais
├── js/
│   └── script.js             # Scripts JavaScript
├── images/                   # Imagens do site
├── pages/
│   ├── about.html           # Página Sobre
│   ├── products.html        # Página de Produtos
│   ├── blog.html            # Página do Blog
│   ├── contact.html         # Página de Contato
│   └── privacy.html         # Política de Privacidade
└── blog-admin/              # Sistema de administração do blog
    ├── src/
    │   ├── main.py          # Aplicação Flask principal
    │   ├── models/          # Modelos de dados
    │   ├── routes/          # Rotas da API
    │   └── static/          # Interface de administração
    └── requirements.txt     # Dependências Python
```

## Funcionalidades Implementadas

### ✅ Correções de Layout e Interface
- FAQ funcional com respostas que abrem/fecham corretamente
- Remoção da seção "Seja o primeiro a saber!" do menu do blog
- Correção do bug do `product-badge` que sobrepunha o h2
- Alinhamento correto do texto "Garantia de 7 dias" com o ícone
- Centralização da seção "O que você vai aprender" em dispositivos móveis
- Footer redesenhado com background igual ao header
- Logo e texto centralizados no footer
- Ano atualizado para 2025
- Remoção de menções ao endereço físico (produto digital)
- Link do WhatsApp atualizado para: https://wa.me/5597981379363

### ✅ Sistema CRUD para Blog
- Interface de administração moderna e intuitiva
- Criação de novos posts com título, conteúdo e imagem opcional
- Listagem de todos os posts publicados
- Edição de posts existentes
- Exclusão de posts
- API REST completa com Flask
- Banco de dados SQLite para armazenamento
- Validação de dados no frontend e backend

### ✅ Formulário de Contato Funcional
- Formulário completo com validação
- Envio de e-mails estruturados para phael92br@gmail.com
- Integração com API backend Flask
- Tratamento de erros com mensagens amigáveis
- Validação de campos obrigatórios
- Feedback visual durante o envio

### ✅ Política de Privacidade
- Página completa conforme LGPD
- Todas as seções obrigatórias incluídas
- Design responsivo e consistente
- Integrada ao formulário de contato

## Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Python Flask
- **Banco de Dados**: SQLite
- **Estilização**: CSS Grid, Flexbox, Variáveis CSS
- **Ícones**: Font Awesome 6.0
- **Fontes**: Google Fonts (Inter)




## Instalação e Configuração

### Pré-requisitos

- Python 3.8 ou superior
- pip (gerenciador de pacotes Python)
- Navegador web moderno

### Configuração do Sistema de Blog

O sistema de blog utiliza Flask como backend. Para configurá-lo:

1. **Navegue até o diretório do blog-admin:**
   ```bash
   cd blog-admin
   ```

2. **Ative o ambiente virtual:**
   ```bash
   source venv/bin/activate
   ```

3. **Instale as dependências:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Execute o servidor Flask:**
   ```bash
   python src/main.py
   ```

5. **Acesse o sistema:**
   - Sistema de blog: http://localhost:5000
   - Administração: http://localhost:5000/admin.html

### Configuração do Site Principal

O site principal é estático e pode ser servido por qualquer servidor web. Para desenvolvimento local, você pode usar:

```bash
# Usando Python (a partir do diretório raiz)
python -m http.server 8000

# Ou usando Node.js
npx serve .
```

Acesse o site em: http://localhost:8000

## Configuração de E-mail

O formulário de contato está configurado para enviar e-mails para `phael92br@gmail.com`. Para configurar um servidor SMTP real em produção:

1. Edite o arquivo `blog-admin/src/routes/contact.py`
2. Configure as variáveis de ambiente para SMTP:
   - `SMTP_SERVER`
   - `SMTP_PORT`
   - `SMTP_USERNAME`
   - `SMTP_PASSWORD`
3. Descomente e configure a seção de envio de e-mail real



# Tutorial: Como Gerenciar o Blog

Este tutorial ensina como usar o sistema de administração do blog de forma simples e intuitiva, sem necessidade de conhecimentos técnicos.

## Acessando o Sistema de Administração

### Passo 1: Iniciar o Sistema
1. Abra o terminal ou prompt de comando
2. Navegue até a pasta `blog-admin`
3. Execute os comandos:
   ```bash
   source venv/bin/activate
   python src/main.py
   ```
4. Aguarde a mensagem "Running on http://127.0.0.1:5000"

### Passo 2: Acessar a Interface
1. Abra seu navegador web
2. Digite na barra de endereços: `http://localhost:5000`
3. Clique em "Acessar Administração"

## Criando um Novo Post

### Passo 1: Acessar a Área de Criação
1. Na tela principal da administração, certifique-se de que a aba "Novo Post" está selecionada (destacada em roxo)
2. Você verá um formulário com os seguintes campos:
   - **Título do Post** (obrigatório)
   - **URL da Imagem** (opcional)
   - **Conteúdo do Post** (obrigatório)

### Passo 2: Preencher as Informações

#### Título do Post
- Digite um título atrativo e descritivo
- Exemplo: "5 Dicas Essenciais para Compliance Empresarial"
- Evite títulos muito longos (máximo 100 caracteres)

#### URL da Imagem (Opcional)
- Cole o link de uma imagem da internet
- A imagem deve estar hospedada online (ex: Unsplash, Pixabay)
- Exemplo: `https://images.unsplash.com/photo-1589829545856-d10d557cf95f`
- **Dica**: Use imagens relacionadas ao tema jurídico/empresarial

#### Conteúdo do Post
- Escreva o conteúdo completo do artigo
- Use parágrafos para organizar o texto
- Seja claro e objetivo
- Inclua informações valiosas para o leitor

### Passo 3: Publicar o Post
1. Revise todas as informações preenchidas
2. Clique no botão "Publicar Post"
3. Aguarde a mensagem de confirmação "Post criado com sucesso!"
4. O formulário será limpo automaticamente para um novo post

### Exemplo Prático de Post

**Título:** "Como Implementar um Programa de Compliance Eficaz"

**Conteúdo:**
```
A implementação de um programa de compliance eficaz é fundamental para qualquer empresa que deseja operar de forma ética e em conformidade com a legislação.

Um programa bem estruturado deve incluir:

1. Mapeamento de riscos específicos do negócio
2. Criação de políticas e procedimentos claros
3. Treinamento regular dos colaboradores
4. Monitoramento contínuo das atividades
5. Canal de denúncias confidencial

A cultura de compliance deve ser promovida desde a alta direção até os níveis operacionais, garantindo que todos os colaboradores compreendam a importância da conformidade.

Lembre-se: compliance não é apenas sobre evitar problemas legais, mas sobre construir uma reputação sólida e sustentável no mercado.
```

## Visualizando Posts Publicados

### Passo 1: Acessar a Lista de Posts
1. Na tela de administração, clique na aba "Listar Posts"
2. Aguarde o carregamento da lista

### Passo 2: Navegar pelos Posts
- Todos os posts aparecerão em cards organizados
- Cada card mostra:
  - Título do post
  - Data de criação e última atualização
  - Imagem (se houver)
  - Prévia do conteúdo (primeiras 200 palavras)
  - Botões de ação (Editar e Excluir)

## Editando um Post Existente

### Passo 1: Localizar o Post
1. Vá para a aba "Listar Posts"
2. Encontre o post que deseja editar
3. Clique no botão "Editar" (ícone de lápis)

### Passo 2: Modificar as Informações
1. O sistema carregará automaticamente os dados do post no formulário
2. O título mudará para "Editar Post"
3. Modifique os campos desejados:
   - Título
   - URL da imagem
   - Conteúdo

### Passo 3: Salvar as Alterações
1. Após fazer as modificações, clique em "Atualizar Post"
2. Aguarde a confirmação "Post atualizado com sucesso!"
3. O post será atualizado imediatamente

### Dicas para Edição
- **Correções de texto**: Revise ortografia e gramática
- **Atualização de conteúdo**: Adicione informações mais recentes
- **Melhoria de imagens**: Substitua por imagens de melhor qualidade
- **Otimização de título**: Torne-o mais atrativo ou claro

## Excluindo um Post

### Passo 1: Localizar o Post
1. Vá para a aba "Listar Posts"
2. Encontre o post que deseja excluir

### Passo 2: Confirmar a Exclusão
1. Clique no botão "Excluir" (ícone de lixeira)
2. Uma janela de confirmação aparecerá
3. Leia a mensagem: "Tem certeza que deseja excluir este post? Esta ação não pode ser desfeita."
4. Clique em "OK" para confirmar ou "Cancelar" para desistir

### Passo 3: Verificar a Exclusão
- O post será removido imediatamente da lista
- Uma mensagem de confirmação aparecerá: "Post excluído com sucesso!"

### ⚠️ Importante sobre Exclusão
- **A exclusão é permanente** - não há como recuperar um post excluído
- **Faça backup** se necessário antes de excluir
- **Considere editar** em vez de excluir se for apenas uma correção

## Boas Práticas para Gerenciamento do Blog

### Frequência de Publicação
- **Consistência é fundamental**: Publique regularmente (ex: 1-2 posts por semana)
- **Qualidade sobre quantidade**: Prefira posts bem elaborados
- **Planejamento**: Mantenha uma lista de ideias para posts futuros

### Qualidade do Conteúdo
- **Relevância**: Publique conteúdo útil para seu público-alvo
- **Originalidade**: Evite copiar conteúdo de outros sites
- **Atualização**: Mantenha informações sempre atualizadas
- **Linguagem**: Use linguagem clara e profissional

### Otimização de Imagens
- **Tamanho adequado**: Use imagens com boa resolução mas não muito pesadas
- **Relevância**: Escolha imagens relacionadas ao tema do post
- **Direitos autorais**: Use apenas imagens livres de direitos ou próprias
- **Fontes recomendadas**: Unsplash, Pixabay, Pexels

### Organização e Manutenção
- **Revisão regular**: Revise posts antigos periodicamente
- **Atualização de links**: Verifique se links externos ainda funcionam
- **Backup**: Mantenha backup do conteúdo importante
- **Monitoramento**: Acompanhe o desempenho dos posts

## Solução de Problemas Comuns

### Problema: "Erro ao salvar post"
**Possíveis causas:**
- Campos obrigatórios não preenchidos
- Conexão com internet instável
- Servidor Flask não está rodando

**Soluções:**
1. Verifique se título e conteúdo estão preenchidos
2. Teste sua conexão com internet
3. Reinicie o servidor Flask

### Problema: "Imagem não aparece no post"
**Possíveis causas:**
- URL da imagem incorreta
- Imagem foi removida do servidor original
- Problemas de permissão de acesso

**Soluções:**
1. Verifique se a URL está correta
2. Teste a URL em uma nova aba do navegador
3. Use uma imagem de fonte confiável

### Problema: "Lista de posts não carrega"
**Possíveis causas:**
- Servidor Flask não está respondendo
- Problema no banco de dados
- JavaScript desabilitado no navegador

**Soluções:**
1. Recarregue a página (F5)
2. Verifique se o servidor Flask está rodando
3. Habilite JavaScript no navegador

### Problema: "Não consigo acessar a administração"
**Possíveis causas:**
- Servidor Flask não foi iniciado
- Porta 5000 está sendo usada por outro programa
- Firewall bloqueando a conexão

**Soluções:**
1. Inicie o servidor Flask conforme instruções
2. Use uma porta diferente se necessário
3. Verifique configurações do firewall

## Contato e Suporte

Se você encontrar problemas não cobertos neste tutorial ou precisar de ajuda adicional:

- **E-mail**: phael92br@gmail.com
- **WhatsApp**: (97) 98137-9363

**Horário de atendimento**: Segunda a sexta, 9h às 18h

Responderemos sua solicitação em até 24 horas.


## Estrutura da API

### Endpoints do Blog

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/posts` | Lista todos os posts |
| GET | `/api/posts/{id}` | Obtém um post específico |
| POST | `/api/posts` | Cria um novo post |
| PUT | `/api/posts/{id}` | Atualiza um post existente |
| DELETE | `/api/posts/{id}` | Exclui um post |

### Endpoints de Contato

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/contact` | Envia mensagem de contato |
| GET | `/api/contact/test` | Testa o serviço de contato |

### Formato dos Dados

#### Post
```json
{
  "id": 1,
  "title": "Título do Post",
  "content": "Conteúdo completo do post...",
  "image_url": "https://exemplo.com/imagem.jpg",
  "created_at": "2025-07-29T10:30:00",
  "updated_at": "2025-07-29T10:30:00"
}
```

#### Mensagem de Contato
```json
{
  "firstName": "João",
  "lastName": "Silva",
  "email": "joao@exemplo.com",
  "phone": "(11) 99999-9999",
  "subject": "Dúvida sobre curso",
  "message": "Gostaria de saber mais informações...",
  "timestamp": "29/07/2025 10:30:00"
}
```

## Deployment e Produção

### Preparação para Produção

1. **Configurar variáveis de ambiente:**
   ```bash
   export FLASK_ENV=production
   export SECRET_KEY=sua_chave_secreta_aqui
   export DATABASE_URL=sqlite:///production.db
   ```

2. **Configurar servidor SMTP real:**
   - Edite `blog-admin/src/routes/contact.py`
   - Configure credenciais SMTP
   - Teste o envio de e-mails

3. **Otimizar banco de dados:**
   - Configure backup automático
   - Implemente índices se necessário
   - Configure logs de auditoria

### Opções de Hospedagem

#### Para o Site Estático
- **Netlify**: Deploy automático via Git
- **Vercel**: Excelente para sites estáticos
- **GitHub Pages**: Gratuito para repositórios públicos
- **AWS S3**: Escalável e confiável

#### Para a API Flask
- **Heroku**: Fácil deploy com Git
- **DigitalOcean**: VPS com controle total
- **AWS EC2**: Escalável e robusto
- **Google Cloud Platform**: Integração com outros serviços

### Configuração de Domínio

1. **Registre um domínio** (ex: controledodireito.com.br)
2. **Configure DNS** apontando para seu servidor
3. **Configure SSL/HTTPS** para segurança
4. **Teste todas as funcionalidades** em produção

## Manutenção e Atualizações

### Backup Regular

#### Banco de Dados
```bash
# Backup do SQLite
cp blog-admin/src/database/app.db backup/app_$(date +%Y%m%d).db
```

#### Arquivos do Site
```bash
# Backup completo
tar -czf backup/site_$(date +%Y%m%d).tar.gz site-institucional/
```

### Monitoramento

- **Logs do servidor**: Monitore erros e performance
- **Uptime**: Use serviços como UptimeRobot
- **Analytics**: Configure Google Analytics
- **Formulários**: Monitore envios de contato

### Atualizações de Segurança

1. **Mantenha dependências atualizadas:**
   ```bash
   pip list --outdated
   pip install --upgrade package_name
   ```

2. **Atualize regularmente:**
   - Python e Flask
   - Bibliotecas de segurança
   - Certificados SSL

3. **Monitore vulnerabilidades:**
   - Use ferramentas como `safety`
   - Configure alertas de segurança

## Changelog

### Versão 2.0 (29/07/2025)
- ✅ Sistema CRUD completo para blog
- ✅ Formulário de contato funcional
- ✅ Política de privacidade conforme LGPD
- ✅ Correções de layout e responsividade
- ✅ API REST com Flask
- ✅ Interface de administração moderna
- ✅ Documentação completa

### Melhorias Implementadas
- FAQ funcional com animações
- Remoção de seções desnecessárias
- Correção de bugs de posicionamento
- Centralização de elementos em mobile
- Footer redesenhado
- Links atualizados (WhatsApp)
- Ano atualizado para 2025

## Licença

Este projeto é propriedade da **Controle do Direito**. Todos os direitos reservados.

## Créditos

- **Desenvolvimento**: Manus AI
- **Design**: Baseado em princípios de UX/UI modernos
- **Ícones**: Font Awesome
- **Fontes**: Google Fonts (Inter)
- **Imagens**: Unsplash (quando aplicável)

---

**Controle do Direito** - Transformando carreiras jurídicas através da educação especializada.

Para mais informações, visite: [Site Oficial](../index.html) | [Contato](pages/contact.html)


## Configuração do Formulário de Contato para Produção

### Visão Geral

O formulário de contato está pré-configurado e funcional, mas para uso em produção você precisará configurar um servidor SMTP real para envio de e-mails. Atualmente, o sistema está configurado para simular o envio (modo de desenvolvimento).

### Bibliotecas e Dependências Necessárias

O sistema utiliza as seguintes bibliotecas Python que já estão instaladas:

- **Flask**: Framework web principal
- **Flask-CORS**: Para permitir requisições cross-origin
- **smtplib**: Biblioteca padrão do Python para envio de e-mails (já incluída)
- **email.mime**: Para formatação de e-mails (já incluída)

### Configuração para Produção

#### Passo 1: Configurar Variáveis de Ambiente

Crie um arquivo `.env` no diretório `blog-admin/` com as seguintes variáveis:

```bash
# Configurações SMTP
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=seu_email@gmail.com
SMTP_PASSWORD=sua_senha_de_app
SMTP_USE_TLS=True

# E-mail de destino
CONTACT_EMAIL=phael92br@gmail.com

# Configurações de segurança
SECRET_KEY=sua_chave_secreta_aqui
FLASK_ENV=production
```

#### Passo 2: Instalar python-dotenv (se necessário)

```bash
cd blog-admin
source venv/bin/activate
pip install python-dotenv
```

#### Passo 3: Atualizar o Código para Produção

Edite o arquivo `blog-admin/src/routes/contact.py` e descomente as linhas de configuração SMTP:

```python
import os
from dotenv import load_dotenv

load_dotenv()

# Configurações SMTP
SMTP_SERVER = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.getenv('SMTP_PORT', 587))
SMTP_USERNAME = os.getenv('SMTP_USERNAME')
SMTP_PASSWORD = os.getenv('SMTP_PASSWORD')
SMTP_USE_TLS = os.getenv('SMTP_USE_TLS', 'True').lower() == 'true'
```

### Configuração com Gmail

Para usar o Gmail como servidor SMTP:

1. **Ative a verificação em duas etapas** na sua conta Google
2. **Gere uma senha de app**:
   - Vá para [myaccount.google.com](https://myaccount.google.com)
   - Segurança → Verificação em duas etapas → Senhas de app
   - Gere uma senha para "Aplicativo personalizado"
3. **Use essa senha** no arquivo `.env` (não sua senha normal)

### Configuração com Outros Provedores

#### Outlook/Hotmail
```bash
SMTP_SERVER=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USE_TLS=True
```

#### Yahoo
```bash
SMTP_SERVER=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USE_TLS=True
```

#### Provedor Personalizado
Consulte a documentação do seu provedor de e-mail para obter as configurações SMTP corretas.

### Testando a Configuração

1. **Inicie o servidor Flask**:
   ```bash
   cd blog-admin
   source venv/bin/activate
   python src/main.py
   ```

2. **Teste o endpoint**:
   ```bash
   curl -X GET http://localhost:5000/api/contact/test
   ```

3. **Envie um e-mail de teste** através do formulário no site

### Monitoramento e Logs

O sistema registra todas as tentativas de envio de e-mail. Para monitorar:

1. **Verifique os logs do Flask** no terminal
2. **Implemente logging personalizado** se necessário:

```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# No código de envio de e-mail
logger.info(f"E-mail enviado para {email_destino}")
logger.error(f"Erro ao enviar e-mail: {str(e)}")
```

### Segurança e Boas Práticas

1. **Nunca commite** o arquivo `.env` no Git
2. **Use senhas de app** em vez de senhas principais
3. **Configure rate limiting** para evitar spam
4. **Valide todos os dados** antes do envio
5. **Use HTTPS** em produção
6. **Configure backup** dos e-mails importantes

### Solução de Problemas Comuns

#### Erro: "Authentication failed"
- Verifique se a senha de app está correta
- Confirme se a verificação em duas etapas está ativada
- Teste as credenciais em um cliente de e-mail

#### Erro: "Connection refused"
- Verifique se o servidor SMTP e porta estão corretos
- Confirme se o firewall não está bloqueando a conexão
- Teste a conectividade: `telnet smtp.gmail.com 587`

#### E-mails não chegam
- Verifique a pasta de spam
- Confirme se o e-mail de destino está correto
- Verifique os logs do servidor SMTP

### Atualizações e Manutenção

#### Dependências a Monitorar

Mantenha sempre atualizadas as seguintes bibliotecas:

```bash
pip install --upgrade flask flask-cors python-dotenv
```

#### Verificações Regulares

1. **Teste o formulário mensalmente**
2. **Monitore logs de erro**
3. **Verifique se as senhas de app não expiraram**
4. **Atualize dependências de segurança**

### Backup e Recuperação

1. **Faça backup** das configurações SMTP
2. **Documente** todas as configurações personalizadas
3. **Teste a recuperação** em ambiente de desenvolvimento
4. **Mantenha** credenciais de backup atualizadas

Esta configuração garante que o formulário de contato funcione de forma confiável em produção, com todas as medidas de segurança necessárias.

