FROM pandoc/extra:latest
RUN tlmgr install babel-vietnamese

RUN wget -P /etc/apk/keys/ https://cdn.azul.com/public_keys/alpine-signing@azul.com-5d5dc44c.rsa.pub
RUN echo "https://repos.azul.com/zulu/alpine" | tee -a /etc/apk/repositories
RUN apk update && apk add zulu21-jdk

RUN apk add graphviz
ARG PLANTUML_VERSION=v1.2024.7
RUN wget \
  "https://github.com/plantuml/plantuml/releases/download/${PLANTUML_VERSION}/plantuml-pdf-${PLANTUML_VERSION#?}.jar" \
  -O /opt/plantuml.jar
ARG PLANTUML=/usr/local/bin/plantuml
RUN echo "#!/bin/sh" >> $PLANTUML && echo "java -Djava.awt.headless=true -jar /opt/plantuml.jar \${@}" >> $PLANTUML
RUN chmod +x $PLANTUML

COPY entrypoint.sh /opt
RUN chmod +x /opt/entrypoint.sh

ENTRYPOINT /opt/entrypoint.sh
