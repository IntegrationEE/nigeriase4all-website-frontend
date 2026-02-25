/**
 * Configuration file for Charts API credentials
 * 
 * INSTRUCTIONS:
 * 1. Copy this file and rename it to 'charts-api-sec.ts'
 * 2. Fill in your actual API credentials
 * 3. The file 'charts-api-sec.ts' is gitignored and will not be committed
 */

export class ChartsApiSec {
  // Base URL for the Charts API
  static _baseURL = 'https://your-api-domain.com/';
  
  // Bearer token endpoint URL
  static _bearerTokenURL = 'https://your-auth-domain.com/oauth/token';
  
  // OAuth parameters for token request
  static params = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: 'your_client_id_here',
    client_secret: 'your_client_secret_here',
  }).toString();
}
