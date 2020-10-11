def builderDocker
def CommitHash

pipeline {
    
    environment {
        registry = 'baskaraerbasakti/vue'
        registryCredential = 'docker-hub'
    }

    agent any

    parameters {
        booleanParam(name: 'RUNTEST', defaultValue: true, description: 'Toggle this value for testing')
        choice(name: 'CICD', choices: ['CI', 'CICD'], description: 'Pick something')
    }

    stages {
        stage('Build') { 
            steps {
                nodejs("node12") {
                    sh 'yarn install'
                } 
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    CommitHash = sh (script : "git log -n 1 --pretty=format:'%H'", returnStdout: true)
                    builderDocker = docker.build("baskaraerbasakti/vue:${CommitHash}")
                }
            }
        }

        stage('Test') {
            when {
                expression {
                    params.RUNTEST
                }
            }
            steps {
                script {
                    builderDocker.inside {
                        sh 'echo passed'
                    }
                }
            }
        }

        stage('Push Image') {
            when {
                expression {
                    params.RUNTEST
                }
            }

            steps {
                script {
                    docker.withRegistry( '', registryCredential ) {
                        builderDocker.push("${env.GIT_BRANCH}")
                    }     
                }
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