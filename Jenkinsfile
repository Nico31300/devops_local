@Library('piper-lib-os') _
node() {
    stage('prepare') {
        checkout scm
        setupCommonPipelineEnvironment script:this
    }
    stage('build') {
        mtaBuild script: this
    }
    
    stage('uploadToTransportRequest') {
        transportRequestCreate script: this
        transportRequestUploadFile script:this
    }
}
