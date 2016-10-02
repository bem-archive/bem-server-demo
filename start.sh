pushd . >/dev/null

cd `dirname $0`;
screen -S bem-server-demo -d -m -L ./node_modules/.bin/bem server -p 8070 && echo 'bem-server-demo started'
ps ax |grep bem-server-demo |grep -v grep

popd . >/dev/null
