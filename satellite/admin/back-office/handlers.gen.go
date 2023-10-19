// AUTOGENERATED BY private/apigen
// DO NOT EDIT.

package admin

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/spacemonkeygo/monkit/v3"
	"github.com/zeebo/errs"
	"go.uber.org/zap"

	"storj.io/storj/private/api"
)

var ErrPlacementsAPI = errs.Class("admin placements api")

type PlacementManagementService interface {
	GetPlacements(ctx context.Context) ([]PlacementInfo, api.HTTPError)
}

// PlacementManagementHandler is an api handler that implements all PlacementManagement API endpoints functionality.
type PlacementManagementHandler struct {
	log     *zap.Logger
	mon     *monkit.Scope
	service PlacementManagementService
	auth    api.Auth
}

func NewPlacementManagement(log *zap.Logger, mon *monkit.Scope, service PlacementManagementService, router *mux.Router, auth api.Auth) *PlacementManagementHandler {
	handler := &PlacementManagementHandler{
		log:     log,
		mon:     mon,
		service: service,
		auth:    auth,
	}

	placementsRouter := router.PathPrefix("/back-office/api/v1/placements").Subrouter()
	placementsRouter.HandleFunc("/", handler.handleGetPlacements).Methods("GET")

	return handler
}

func (h *PlacementManagementHandler) handleGetPlacements(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()
	var err error
	defer h.mon.Task()(&ctx)(&err)

	w.Header().Set("Content-Type", "application/json")

	retVal, httpErr := h.service.GetPlacements(ctx)
	if httpErr.Err != nil {
		api.ServeError(h.log, w, httpErr.Status, httpErr.Err)
		return
	}

	err = json.NewEncoder(w).Encode(retVal)
	if err != nil {
		h.log.Debug("failed to write json GetPlacements response", zap.Error(ErrPlacementsAPI.Wrap(err)))
	}
}