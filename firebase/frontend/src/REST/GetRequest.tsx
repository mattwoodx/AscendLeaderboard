export interface Team {
    teamName: string
    minutes: number
    seconds: number
    position: number
}

export default function getTeams(division: string): Promise<Team[]> {

    const headers: Headers = new Headers()

    const productionURL = '';
    const devURL = '';

    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')

    if (division === 'ACE_MALE') {
        const request: RequestInfo = new Request(productionURL+'/api/getAllAceMale', {
            method: 'GET',
            headers: headers
        });
    
        return fetch(request).then(res => res.json().then(res => {
            return res.data as Team[]
        }))
    } else if (division === 'ACE_FEMALE') {
        const request: RequestInfo = new Request(productionURL+'/api/getAllAceFemale', {
            method: 'GET',
            headers: headers
        });
    
        return fetch(request).then(res => res.json().then(res => {
            return res.data as Team[]
        }))
    } else if (division === 'ROOKIE_MALE') {
        const request: RequestInfo = new Request(productionURL+'/api/getAllRookieMale', {
            method: 'GET',
            headers: headers
        });
    
        return fetch(request).then(res => res.json().then(res => {
            return res.data as Team[]
        }))
    } else {
        const request: RequestInfo = new Request(productionURL+'/api/getAllRookieFemale', {
            method: 'GET',
            headers: headers
        });
    
        return fetch(request).then(res => res.json().then(res => {
            return res.data as Team[]
        }))
    }



}