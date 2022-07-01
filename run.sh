docker build . -t hcsiteweb

docker stop hcsite-container
docker rm hcsite-container
docker run -d --name hcsite-container -p 8080:80 hcsiteweb