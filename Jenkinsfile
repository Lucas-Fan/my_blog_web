pipline {
  agent { docker 'my_bolg_web' }
  stages {
    stage('build') {
      steps {
        sh 'yarn build'
      }
    }
  }
}