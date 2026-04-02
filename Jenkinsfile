pipeline {
    agent any

    stages {
        stage('Checkout Info') {
            steps {
                echo 'Starting virtual car speed pipeline'
            }
        }

        stage('Check Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t virtual-car-speed .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker rm -f car-speed-container || exit /b 0'
                bat 'docker run -d -p 8080:80 --name car-speed-container virtual-car-speed'
            }
        }

        stage('Build Log') {
            steps {
                bat 'echo Virtual car speed deployed successfully > build-log.txt'
                archiveArtifacts artifacts: 'build-log.txt', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Pipeline success'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}