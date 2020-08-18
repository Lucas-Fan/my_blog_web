pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                nodejs('nodejs') {
                  sh 'yarn'
                  sh 'exit'
                }
            }
        }
    }
}
