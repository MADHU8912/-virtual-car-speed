pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Checkout Info') {
            steps {
                echo 'Source code checked out successfully'
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
                bat 'docker run -d -p 9090:80 --name car-speed-container virtual-car-speed'
            }
        }

        stage('Build Log') {
            steps {
                bat 'echo Build completed successfully > build-log.txt'
                bat 'type build-log.txt'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully'
        }
        failure {
            echo 'Pipeline failed'
        }
        always {
            echo 'Post actions completed'
        }
    }
}