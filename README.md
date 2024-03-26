# Limpeza de mensagens e amigos

## Instalação
   * Altere o nome do arquivo `.env.example` para `.env`. Coloque o token da sua conta na variável TOKEN!
   * Instale os pacotes necessários do projeto com o comando `npm install`.

## Como usar
   * Limpeza de mensagens na DM
     * Dentro da pasta do projeto, utilize o comando `npm run messages`, sua conta será conectada no self-bot.
       Após a conexão vá até a DM qual deseja limpar e digite `!argon`.


   * Limpeza de amigos
     * Dentro da pasta do projeto, utilize o comando `npm run friends`, a limpeza da sua lista de amigos irá iniciar
       automaticamente.

## Observações
* Delay para deletar as filas de mensagens, altere o valor da variável DELAY_QUEUE no arquivo `.env`, o valor deverá ser
  em milissegundos. Recomendo manter em 3000 (3 segundos).
* Quantidade de mensagens a serem deletadas em cada fila, altere o valor da variável QUANTITY_MESSAGES no arquivo `.env`.
  Recomendo manter um valor baixo entre 5 a 10 mensagens a cada 3 segundos.

## Não tenho nenhuma responsabilidade pelo seu uso do self-bot!