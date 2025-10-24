pipeline {
    agent any
    
    environment {
        CI = 'true'
        NODE_ENV = 'test'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from repository
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    bat 'npm ci'
                    
                    // Install Playwright browsers
                    bat 'npx playwright install --with-deps'
                }
            }
        }
        
        stage('Run Specific Test') {
            steps {
                script {
                    // Run the specific OrangeHRM test
                    bat 'npx playwright test "tests/Chapter01/02_OrangeHrm.spec.ts" --project="Google Chrome"'
                }
            }
        }
        
        stage('Run All Tests') {
            steps {
                script {
                    // Run all tests (optional)
                    bat 'npx playwright test --project="Google Chrome"'
                }
            }
        }
    }
    
    post {
        always {
            // Archive test results
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report'
            ])
            
            // Archive JUnit XML results
            publishTestResults testResultsPattern: 'junit-TestReport.xml'
            
            // Archive Allure results if available
            script {
                if (fileExists('allure-results')) {
                    allure([
                        includeProperties: false,
                        jdk: '',
                        properties: [],
                        reportBuildPolicy: 'ALWAYS',
                        results: [[path: 'allure-results']]
                    ])
                }
            }
            
            // Archive artifacts
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**, allure-results/**, *.json, *.xml', allowEmptyArchive: true
        }
        
        failure {
            echo 'Tests failed!'
        }
        
        success {
            echo 'All tests passed successfully!'
        }
    }
}