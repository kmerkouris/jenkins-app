pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'ubuntu:noble'
                    args '-u root'
                }
            }
            steps {
                sh 'echo  "apt update"'
                sh 'echo "apt install jq -y"'
                
            }
        }
    }
}
