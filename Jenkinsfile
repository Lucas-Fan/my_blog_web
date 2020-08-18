pipeline {
    agent any
    stages {
        stage('build') {
            steps {

                sh 'docker exec -i node_blog /bin/bash'
                sh 'cd /home/workspace'
                sh 'yarn'
                sh 'exit'
            }
        }
    }
}
