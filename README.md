Objetivo
    - Criar um mini LinkApi em NodeJS para verificar arquivos de um FTP e reescreve-los criptografando os dados sensíveis.

Passos:
1 - Criar um cron, que deve rodar de 10 em 10 segundos, para verificar se existe algum arquivo novo na pasta 'docs' do FTP:
Acesso do FTP: 01100101 01111001 01001010 00110001 01100011 00110010 01010110 01111001 01001001 01101010 01101111 01101001 01100001 00110010 01000110 01110111 01100001 01010011 01001001 01110011 01001001 01000011 01001010 01110111 01011001 01011000 01001110 01111010 01001001 01101010 01101111 01100111 01001001 01101110 01001110 01101100 01100010 01101101 01101000 01101000 01100100 01000111 00111001 01110111 01011010 01000111 01010110 01110011 01100001 01010111 00110101 01101111 01011001 01010011 01001001 01110011 01001001 01000011 01001010 01101111 01100010 00110011 01001110 00110000 01001001 01101010 01101111 01100111 01001001 01101010 01000101 01110111 01001110 01000011 00110100 01111001 01001101 01000100 01101011 01110101 01001101 01010100 01001101 00110011 01001100 01101010 01000101 01111000 01001110 01101001 01001001 01110011 01001001 01000011 01001010 01110111 01100010 00110011 01001010 00110000 01001001 01101010 01101111 01100111 01001101 01101010 01000110 00111001

2 - Fazer download dos arquivos, de forma temporária, para uma pasta dentro da aplicação
O arquivo deve ser convertido para um json válido

3 - Gravar em uma pasta dentro da aplicação um arquivo com os dados criptografados
Usar o formato Triple DES para criptografia
Chave: 0123456789ABCDEFFEDCBA987654321089ABCDEF01234567

4 - Apagar conteúdo da pasta temporária após salvar o arquivo criptografado