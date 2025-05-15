pipeline {
    agent any

    stages {

            stage('Build')  {
            agent {
                docker {
                    image 'ubuntu:noble'
                    args '-u root'
                }
            }
            steps {
                cleanWs()
                sh 'echo  "apt update"'
                sh 'echo "apt install jq -y"'
                sh 'mkdir -p build'
                sh 'touch build/computer.txt'
                sh 'echo "Mainboard" >> build/computer.txt'
                
            }



        }
        stage('Test')  {
            sh 'test -f build/computer.txt'
            sh 'grep "Mainboard" build/computer.txt'
        }    
    }
}
