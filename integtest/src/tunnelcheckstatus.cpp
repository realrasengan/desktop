// Copyright (c) 2019 London Trust Media Incorporated
//
// This file is part of the Private Internet Access Desktop Client.
//
// The Private Internet Access Desktop Client is free software: you can
// redistribute it and/or modify it under the terms of the GNU General Public
// License as published by the Free Software Foundation, either version 3 of
// the License, or (at your option) any later version.
//
// The Private Internet Access Desktop Client is distributed in the hope that
// it will be useful, but WITHOUT ANY WARRANTY; without even the implied
// warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with the Private Internet Access Desktop Client.  If not, see
// <https://www.gnu.org/licenses/>.

#include "common.h"
#line SOURCE_FILE("tunnelcheckstatus.cpp")

#include "tunnelcheckstatus.h"
#include "apibase.h"

namespace
{
    std::chrono::seconds _interval{1};
}

TunnelCheckStatus::TunnelCheckStatus()
    : _refresher{QStringLiteral("client status"), ApiBases::piaIpAddrApi,
                 QStringLiteral("api/client/status"), _interval, _interval},
      _status{Status::Unknown}
{
    connect(&_refresher, &JsonRefresher::contentLoaded, this, [this](const QJsonDocument &content)
    {
        const QJsonValue &connectedVal = content["connected"];
        Status newStatus = Status::Unknown;
        if(connectedVal.isBool())
        {
            newStatus = connectedVal.toBool() ? Status::OnVPN : Status::OffVPN;
            _refresher.loadSucceeded();
        }

        if(newStatus != _status)
        {
            _status = newStatus;
            emit statusChanged(_status);
        }
    });

    _refresher.start();
}
