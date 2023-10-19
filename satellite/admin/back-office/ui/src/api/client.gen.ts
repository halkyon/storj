// AUTOGENERATED BY private/apigen
// DO NOT EDIT.

import { HttpClient } from '@/utils/httpClient';

export class PlacementInfo {
    id: number;
    location: string;
}

class APIError extends Error {
    constructor(
        public readonly msg: string,
        public readonly responseStatusCode?: number,
    ) {
        super(msg);
    }
}

export class PlacementManagementHttpApiV1 {
    private readonly http: HttpClient = new HttpClient();
    private readonly ROOT_PATH: string = '/back-office/api/v1/placements';

    public async getPlacements(): Promise<PlacementInfo[]> {
        const fullPath = `${this.ROOT_PATH}/`;
        const response = await this.http.get(fullPath);
        if (response.ok) {
            return response.json().then((body) => body as PlacementInfo[]);
        }
        const err = await response.json();
        throw new APIError(err.error, response.status);
    }
}