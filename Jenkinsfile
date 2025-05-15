pipeline {
  agent any

    environment {
        BUILD_FILE_NAME = 'laptop.txt'
        BUILD_FOLDER_NAME = 'build'
    }

    stages {
        stage('Build') {
            steps {
                cleanWs()
                echo 'Building step ...'
                sh '''
                    echo $BUILD_FILE_NAME
                    mkdir -p $BUILD_FOLDER_NAME
                    echo "Mainboard" >> $BUILD_FOLDER_NAME/$BUILD_FILE_NAME
                    cat $BUILD_FOLDER_NAME/$BUILD_FILE_NAME
                    echo "Display" >> $BUILD_FOLDER_NAME/$BUILD_FILE_NAME
                    cat $BUILD_FOLDER_NAME/$BUILD_FILE_NAME
                    echo "Keyboard" >> $BUILD_FOLDER_NAME/$BUILD_FILE_NAME
                    cat $BUILD_FOLDER_NAME/$BUILD_FILE_NAME
                '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing step ...'
                sh '''
                    test -f $BUILD_FOLDER_NAME/$BUILD_FILE_NAME
                    grep "Mainboard" $BUILD_FOLDER_NAME/$BUILD_FILE_NAME
                    grep "Display" $BUILD_FOLDER_NAME/$BUILD_FILE_NAME
                    grep "Keyboard" $BUILD_FOLDER_NAME/$BUILD_FILE_NAME
                '''
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: "$BUILD_FOLDER_NAME/**"
        }
    }
}
