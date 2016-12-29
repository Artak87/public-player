#!/usr/bin/env bash
DOCKER_CERT_PATH=.cloud_hero
echo $DOCKER_CERT_PATH
DOCKER_TLS_VERIFY=1
echo $DOCKER_TLS_VERIFY
DOCKER_HOST='tcp://swarm3541.chapi.co:8443'
echo $DOCKER_HOST
mkdir -p $DOCKER_CERT_PATH
ls -la
CLOUDHERO_PROFILE=.cloudhero_profile

echo export DOCKER_CERT_PATH=$DOCKER_CERT_PATH > $CLOUDHERO_PROFILE
echo export DOCKER_HOST=$DOCKER_HOST >> $CLOUDHERO_PROFILE
echo export DOCKER_TLS_VERIFY=1 >> $CLOUDHERO_PROFILE

curl -s https://portal.cloudhero.io/bootstrap/CT8120WX6J1X3WW6HC1K58815N8FABEG/ca > $DOCKER_CERT_PATH/ca.pem
curl -s https://portal.cloudhero.io/bootstrap/CT8120WX6J1X3WW6HC1K58815N8FABEG/cert > $DOCKER_CERT_PATH/cert.pem
curl -s https://portal.cloudhero.io/bootstrap/CT8120WX6J1X3WW6HC1K58815N8FABEG/key > $DOCKER_CERT_PATH/key.pem

cat $CLOUDHERO_PROFILE
echo
echo '#You can also set the environment by running:'
echo '#source ' $CLOUDHERO_PROFILE
echo
echo '#Run our demo container (and access it through a browser at at http://swarm3541.chapi.co):'
echo '#docker run -d -p 80:80 cloudhero/apache-php'
