
pipeline {
    
    agent any

    parameters {
        booleanParam(name: 'RUNTEST', defaultValue: true, description: 'Toggle this value for testing')
        choice(name: 'CICD', choices: ['CI', 'CICD'], description: 'Pick something')
    }

    stages {
        stage('Build') { 
            steps {
                echo 'Build...' 
            }
        }
        stage('Test') {
            when {
                expression {
                    params.RUNTEST
                }
            }
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            when {
                expression {
                    params.CICD == 'CICD'
                }
            } 
            steps {
                echo 'Deploy...' 
            }
        }
    }
} 