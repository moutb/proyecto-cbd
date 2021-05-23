docker network create --driver bridge couch
cp my.cookie /tmp

mkdir -p couch1data
mkdir -p couch2data
mkdir -p couch3data

docker run -d --name couchdb.one \
 --net=couch \
 --hostname couchdb.one \
 -p 5984:5984 \
 -e NODENAME=couchdb.one \
 -e COUCHDB_USER=admin \
 -e COUCHDB_PASSWORD=admin \
 -e ERL_FLAGS='-setcookie "brumbrum"' \
 -v $(pwd)/couch1data:/opt/couchdb/data:Z \
couchdb:latest 

docker run -d --name couchdb.two \
 --net=couch \
 --hostname couchdb.two \
 -p 15984:5984 \
 -e NODENAME=couchdb.two \
 -e COUCHDB_USER=admin \
 -e COUCHDB_PASSWORD=admin \
 -e ERL_FLAGS='-setcookie "brumbrum"' \
 -v $(pwd)/couch2data:/opt/couchdb/data:Z \
couchdb:latest 

docker run -d --name couchdb.three \
 --net=couch \
 --hostname couchdb.three \
 -p 25984:5984 \
 -e NODENAME=couchdb.three \
 -e COUCHDB_USER=admin \
 -e COUCHDB_PASSWORD=admin \
 -e ERL_FLAGS='-setcookie "brumbrum"' \
 -v $(pwd)/couch3data:/opt/couchdb/data:Z \
couchdb:latest 

