### space footbal telegram mini app

#### dev

for creating local cert keys, run in this directory (for macos):

need installed mkcert

`brew install mkcert` for installing

`mkdir -p .cert && mkcert -key-file ./.cert/localhost-key.pem -cert-file ./.cert/localhost.pem 'tg-mini-app.local'`

#### Deploy

`yarn build`

copy all to hosting
`scp -rp ./dist/* ildar-nasrov@ildar-nasrov.myjino.ru:/home/users/i/ildar-nasrov/domains/tgapp.dobromam.ru`

remove prev version site and copy new version after building

`ssh ildar-nasrov@ildar-nasrov@ildar-nasrov.myjino.ru "rm -rf /home/users/i/ildar-nasrov/domains/tgapp.dobromam.ru/*" & scp -rp ./dist/* ildar-nasrov@ildar-nasrov.myjino.ru:/home/users/i/ildar-nasrov/domains/tgapp.dobromam.ru`

or sepratelly
remove `ssh ildar-nasrov@ildar-nasrov@ildar-nasrov.myjino.ru "rm -rf /home/users/i/ildar-nasrov/domains/tgapp.dobromam.ru/*"`
copy `scp -rp ./dist/* ildar-nasrov@ildar-nasrov.myjino.ru:/home/users/i/ildar-nasrov/domains/tgapp.dobromam.ru`
