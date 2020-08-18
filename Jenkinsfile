pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                nodejs('node') {
                  sh 'echo start bulid'
                  sh 'yarn'
                }
            }
        }
    }
}
