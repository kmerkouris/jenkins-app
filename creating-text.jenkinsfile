pipeline {
    agent any

    environment {
        FILE = 'laptop.txt'
        BUILD = 'build'
    }

    stages {
        stage('Build') {
            
            steps {
                sh '''
                    mkdir -p $BUILD
                    touch $BUILD/$FILE
                    echo "Mainboard" >> $BUILD/$FILE
                    
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing the new laptop ...'
                sh '''
                    test -f $BUILD/$FILE
                    grep "Mainboard" $BUILD/$FILE
                    
                '''
            }
        }
    }
}
