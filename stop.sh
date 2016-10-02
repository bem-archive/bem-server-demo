DNAME=bem-server-demo
screen -r bem-server-demo -X quit >/dev/null && echo $DNAME 'stopped' || echo $DNAME 'not started'
